const mongoose = require('mongoose');
const bcryptjs = require('bcryptjs');

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
});

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
