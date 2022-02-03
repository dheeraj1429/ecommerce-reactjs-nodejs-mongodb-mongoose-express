const mongoose = require('mongoose');
const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');

const JWT_TOKEN = process.env.SECRET_KEY;

const User = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'please enter the name'],
  },
  email: {
    type: String,
    required: [true, 'please enter the email'],
  },
  password: {
    type: String,
    required: [true, 'please enter the password'],
  },
  isAdmin: {
    type: String,
    default: 'user',
  },
  tokens: [
    {
      token: {
        type: String,
        required: true,
      },
    },
  ],
});

// Genrate the user token
User.methods.genrateUserToken = async function () {
  try {
    const token = await jwt.sign({ _id: this._id.toString(), name: this.name, isAdmin: this.isAdmin }, JWT_TOKEN, { expiresIn: '30d' });
    this.tokens = this.tokens.concat({ token });
    this.save();
    return token;
  } catch (err) {
    console.log(err);
  }
};

// hashing the password
User.pre('save', async function (next) {
  try {
    if (this.isModified('password')) {
      const hashpassword = await bcryptjs.hash(this.password, 11);
      this.password = hashpassword;
    }
    next();
  } catch (err) {
    console.log(err);
  }
});

const UserModel = new mongoose.model('user', User);

module.exports = UserModel;
