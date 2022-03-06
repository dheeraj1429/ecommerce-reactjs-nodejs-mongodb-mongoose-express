const mongoose = require('mongoose');

const subcriptionSchema = new mongoose.Schema({
   userInfo: {
      type: mongoose.Types.ObjectId,
      ref: 'User',
      required: [true, 'user info is required'],
   },
   createAt: {
      type: Date,
      timestamp: Date.now,
   },
});

const subcriptionModel = new mongoose.model('subcription', subcriptionSchema);

module.exports = subcriptionModel;
