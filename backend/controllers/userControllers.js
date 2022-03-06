const UserModel = require('../models/userModel');
const bcryptjs = require('bcryptjs');
const cart = require('../cart');
const ejs = require('ejs');
const fs = require('fs');
const path = require('path');
const rootFolder = require('../util/rootFolder');
const subcriptionModel = require('../models/subcriptionModel');
const mail = require('../util/mailler');
const jwt = require('jsonwebtoken');
const JWT_TOKEN = process.env.SECRET_KEY;

const inserNewUser = async (req, res) => {
   try {
      const { name, email, password } = req.body.data;

      // create a user
      const newUser = await new UserModel({
         name,
         email,
         password,
      });

      // save the user into the database
      const storeUserRef = await newUser.save();

      // Genrate the user token
      const token = await newUser.genrateUserToken();

      // send back the res
      if (storeUserRef) {
         return res.status(201).json({
            success: true,
            massage: 'successful sign in',
            data: {
               name,
               email,
               token,
               admin: newUser.isAdmin,
            },
         });
      } else {
         return res.status(400).json({
            success: false,
            massage: 'something worng',
         });
      }
   } catch (err) {
      console.log(err);
   }
};

// Find user from the database
const userFind = async (req, res) => {
   try {
      const { name, email, password } = req.body.data;

      // find the user from the database
      const userFindDb = await UserModel.findOne({ $and: [{ name }, { email }] });

      // match the hashing password
      const isMatch = await bcryptjs.compare(password, userFindDb.password);

      // Genrate the user token
      const token = await userFindDb.genrateUserToken();

      // send back the response
      if (isMatch) {
         return res.status(200).json({
            success: true,
            massage: 'login successful',
            data: {
               name,
               email,
               token,
               admin: userFindDb.isAdmin,
            },
         });
      } else {
         return res.status(404).json({
            data: {
               success: false,
               massage: 'no user found',
            },
         });
      }
   } catch (err) {
      console.log(err);
   }
};

// get the all users from the database
const getAllUserFromDb = async function (req, res) {
   try {
      // fetch all users
      const userRefData = await UserModel.find();

      if (userRefData) {
         // send back response
         res.status(200).json({
            userRefData,
         });
      }
   } catch (err) {
      console.log(err);
   }
};

// Change user info data
const changeUserInfoData = async function (req, res) {
   try {
      // find the right user
      const { id, name, UserDbInfo } = req.body.data;

      // update the filds
      const userUpdateRef = await UserModel.updateOne(
         { $or: [{ _id: id }, { name }] },
         { $set: { isAdmin: UserDbInfo.isAdmin } }
      );

      // send back the response
      if (userUpdateRef) {
         return res.status(200).json({
            success: true,
         });
      }
   } catch (err) {
      return res.status(400).json({
         massage: 'something worng',
      });
   }
};

// send newslette
const sendNewsletter = async function (req, res, next) {
   try {
      const { data: userEmail } = req.body;

      const findUserDb = await UserModel.findOne({ email: userEmail });

      const findUserId = findUserDb._id;

      const userPresent = await subcriptionModel.findOne({ userInfo: findUserId });
      if (userPresent) {
         return res.status('200').json({
            success: true,
            message: 'Already Subscribed',
         });
      } else {
         const subcriptionUsers = await new subcriptionModel({
            userInfo: findUserId,
         });

         fs.readFile(
            path.join(rootFolder, 'views', 'template', 'subcription.ejs'),
            'utf-8',
            function (err, data) {
               if (err) {
                  console.log(err);
               } else {
                  const transporter = mail.mailOptionFunction();

                  const mailOption = {
                     from: cart.USER,
                     to: userEmail,
                     subject: 'testing and testing',
                     text: 'thanks for subscription!!',
                     html: ejs.render(data),
                  };

                  transporter.sendMail(mailOption, function (err, data) {
                     if (err) {
                        console.log(err);
                     } else {
                        const subcriptionUsersInsert = subcriptionUsers.save();

                        if (subcriptionUsersInsert) {
                           return res.status('201').json({
                              success: true,
                              message: 'Thanks For Subscribed',
                           });
                        }
                     }
                  });
               }
            }
         );
      }
   } catch (err) {
      console.log(err);
   }
};

// forget password
const userForgetPassword = async function (req, res, next) {
   try {
      const { data: userEmail } = req.body;

      const findUserDb = await UserModel.findOne({ email: userEmail });

      const userToken = await jwt.sign(
         { id: findUserDb._id, name: findUserDb.name, email: findUserDb.email },
         JWT_TOKEN
      );

      fs.readFile(
         path.join(rootFolder, 'views', 'template', 'resetPassword.ejs'),
         'utf-8',
         function (err, data) {
            if (err) {
               console.log(err);
            } else {
               const transporter = mail.mailOptionFunction();

               const mailOption = {
                  from: cart.USER,
                  to: userEmail,
                  subject: 'rest password request',
                  text: 'learning and test',
                  html: ejs.render(data, {
                     id: userToken,
                  }),
               };

               transporter.sendMail(mailOption, function (err, data) {
                  if (err) {
                     return res.status(400).json({
                        success: false,
                        message: 'somthing worng',
                     });
                  } else {
                     return res.status(200).json({
                        success: true,
                        message: 'reset password mail send!!',
                     });
                  }
               });
            }
         }
      );
   } catch (err) {
      console.log(err);
   }
};

// reset password
const userResetPassword = async function (req, res, next) {
   try {
      const { password, id } = req.body.data;
      const varifyTokne = await jwt.verify(id, JWT_TOKEN);

      const hashingPassword = await bcryptjs.hash(password, 11);

      const findUserInDb = await UserModel.updateOne(
         {
            $or: [
               { _id: varifyTokne.id },
               { name: varifyTokne.name },
               { email: varifyTokne.email },
            ],
         },
         { $set: { password: hashingPassword } }
      );

      if (findUserInDb) {
         return res.status(200).json({
            success: true,
            message: 'password changes successful',
         });
      } else {
         return res.status(400).json({
            success: false,
            message: 'something worng',
         });
      }
   } catch (err) {
      console.log(err);
   }
};

module.exports = {
   inserNewUser,
   userFind,
   getAllUserFromDb,
   changeUserInfoData,
   sendNewsletter,
   userForgetPassword,
   userResetPassword,
};
