const StoreData = require('../models/productModel');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const JWT_SECRET = 'asdasdasdwdrqwoihb%#(Y(@^$(@$^)@@@#!#$@$#@@^^#%##^^?#">))iukjbibwodqiwniubikqweqwrq';

// Sign In -> store user into database
const newUser = async (req, res) => {
  const { name, email, password } = req.body.data;

  const hashPassword = await bcrypt.hash(password, 10);

  try {
    const userRefData = new StoreData.UserDataSchema({ name, email, password: hashPassword });

    const token = jwt.sign(
      {
        id: userRefData._id,
        name: userRefData.name,
      },
      JWT_SECRET
    );

    const userRef = await userRefData.save();
    console.log(userRef);

    // error
    const varifyUser = await jwt.verify(token, JWT_SECRET);
    console.log(varifyUser);

    if (userRef) {
      return res.status(200).json({
        success: true,
        massage: 'login successful',
        userData: {
          name: req.body.data.name,
          email: req.body.data.email,
          data: token,
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

// Sign Up -> fetch users from the database
const findUserSignUp = async (req, res) => {
  const { name, email, password } = req.body.data;
  console.log(name, email, password);

  const user = await StoreData.UserDataSchema.find({ $and: [{ name }, { email }] });
  console.log(user);

  if (!user) {
    return res.json({
      success: false,
      massage: 'No user found',
    });
  }

  const userPassHashFind = await bcrypt.compare(password, user[0].password);

  if (userPassHashFind) {
    return res.status(200).json({
      name: user[0].name,
      email: user[0].email,
    });
  }
};

module.exports = {
  newUser,
  findUserSignUp,
};
