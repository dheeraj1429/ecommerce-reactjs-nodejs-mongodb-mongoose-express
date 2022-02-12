const Product = require('../models/productModel');

// Create a product
const createProducts = async (req, res) => {
   try {
      const productRef = await Product.create(req.body.data);

      if (productRef) {
         res.status(200).json({
            success: true,
            message: 'product insert successful',
         });
      } else {
         res.status(400).json({
            success: false,
            message: 'somthing worng',
         });
      }
   } catch (err) {
      console.log(err);
   }
};

// Fetch all produst
const fetchAllProducts = async (req, res) => {
   try {
      const AllProducts = await Product.find();

      if (AllProducts) {
         res.status(200).json({
            success: true,
            AllProducts,
         });
      } else {
         res.status(400).json({
            success: false,
            message: 'somthing worng',
         });
      }
   } catch (err) {
      console.log(err);
   }
};

// update the products
const updateProducts = async function (req, res) {
   try {
      const {
         id,
         name,
         brand,
         gender,
         price,
         category,
         rating,
         image,
         stock,
         review,
         discription,
      } = req.body.data;

      // find the product from the database
      const findProductDb = await Product.updateOne(
         { $or: [{ _id: id }, { name }, { brand }] },
         {
            $set: {
               name,
               brand,
               gender,
               price,
               category,
               rating,
               stock,
               review,
               discription,
               image: [
                  {
                     url: image,
                  },
               ],
            },
         }
      );

      if (findProductDb) {
         return res.status(200).json({
            success: true,
            message: 'product update successful',
         });
      }
   } catch (err) {
      console.log(err);
   }
};

module.exports = {
   createProducts,
   fetchAllProducts,
   updateProducts,
};
