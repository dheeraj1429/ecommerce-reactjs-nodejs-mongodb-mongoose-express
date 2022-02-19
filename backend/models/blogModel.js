const mongoose = require('mongoose');

const blog = new mongoose.Schema({
   name: {
      type: String,
      required: [true, 'please enter the user name'],
   },

   image: {
      type: String,
   },

   discription: {
      type: String,
      required: [true, 'please enter the blog discription'],
   },

   createdAt: {
      type: Date,
      default: Date.now,
   },
});

const blogData = mongoose.model('blog', blog);

module.exports = blogData;
