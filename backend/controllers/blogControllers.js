const blogData = require('../models/blogModel');

// create a blog
const postBlog = async function (req, res) {
   try {
      const { name, description, image, userData } = req.body.data;

      // create the blog post collection inside the database
      const post = await new blogData({
         name,
         description,
         image,
         createdBy: {
            userProfileInfo: userData,
         },
      });

      const postRef = await post.save();

      if (postRef) {
         return res.status(201).json({
            success: true,
            massage: 'post upload successful',
         });
      }
   } catch (err) {
      console.log(err);
   }
};

// get all blog post from the database
const getAllBlogPost = async function (req, res) {
   try {
      const blogRef = await blogData.find();

      if (blogRef) {
         return res.status(200).json({
            blogRef,
         });
      }
   } catch (err) {
      console.log(err);
   }
};

module.exports = {
   postBlog,
   getAllBlogPost,
};
