const UserModel = require('../models/userModel');
const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');

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
      return res.status(400).json({
        success: false,
        massage: 'no user found',
      });
    }
  } catch (err) {
    console.log(err);
  }
};

module.exports = {
  inserNewUser,
  userFind,
};
