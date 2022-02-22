const mongoose = require('mongoose');

const blog = new mongoose.Schema({
   name: {
      type: String,
      required: [true, 'please enter the user name'],
   },

   image: {
      type: String,
   },

   description: {
      type: String,
      required: [true, 'please enter the blog description'],
   },

   createdBy: [
      {
         userProfileInfo: {
            type: Object,
            required: [true, 'please enter the user profile infomation'],
         },
         userProfilePic: {
            type: String,
            default:
               'https://images.unsplash.com/photo-1636213200605-f7e894201697?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
         },
      },
   ],

   createdAt: {
      type: Date,
      default: Date.now,
   },

   comments: [
      {
         userInfo: [
            {
               name: {
                  type: String,
                  required: [true, 'please enter the comment user name'],
               },

               userProfile: {
                  type: String,
                  default:
                     'https://images.unsplash.com/photo-1644186194219-479cf0911e3f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
               },

               createdAt: {
                  type: Date,
                  default: Date.now,
               },
            },
         ],
      },
   ],
});

const blogData = mongoose.model('blog', blog);

module.exports = blogData;
