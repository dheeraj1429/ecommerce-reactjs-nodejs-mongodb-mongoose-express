const StoreData = require('../models/productModel');

// Sign In
const newUser = async (req, res) => {
  try {
    const userRef = await StoreData.UserDataSchema.create(req.body.data);

    if (userRef) {
      return res.status(200).json({
        success: true,
        massage: 'login successful',
        userData: {
          name: req.body.data.name,
          email: req.body.data.email,
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

// Sign Up
const findUserSignUp = async (req, res) => {
  try {
    const { name, email, password } = req.body.data;
    console.log(name, email, password);

    const finduserData = await StoreData.UserDataSchema.find({ $and: [{ name }, { email }, { password }] });
    console.log(finduserData);

    if (finduserData.length > 0) {
      return res.status(200).json({
        success: true,
        massage: 'User Present',
        data: {
          name,
          email,
        },
      });
    } else {
      return res.status(400).json({
        success: false,
        massage: 'No user present',
      });
    }
  } catch (err) {
    console.log(err);
  }
};

module.exports = {
  newUser,
  findUserSignUp,
};
