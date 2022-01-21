const Product = require('../models/productModel');

// Create a product
const createProducts = async (req, res) => {
  console.log(req.body.data);

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

module.exports = {
  createProducts,
  fetchAllProducts,
};
