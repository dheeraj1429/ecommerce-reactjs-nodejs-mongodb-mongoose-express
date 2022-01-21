const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'please enter the product name'],
  },
  discription: {
    type: String,
    required: [true, 'please enter the product discription'],
  },
  gender: {
    type: String,
    default: 'Both',
  },
  brand: {
    type: String,
    required: [true, 'please select the brand of this product'],
  },
  price: {
    type: Number,
    required: [true, 'please enter the price'],
  },
  rating: {
    type: Number,
    default: 0,
  },
  image: [
    {
      url: {
        type: String,
        required: [true, 'please select the url'],
      },
    },
  ],
  galleryImage: [
    {
      img: {
        type: String,
      },
    },
  ],
  category: {
    type: String,
    required: [true, 'please selecte category'],
  },
  stock: {
    type: Number,
    default: 1,
    maxlength: [4, 'max charecter'],
  },
  review: {
    type: Number,
    default: 0,
  },
  reviews: [
    {
      name: {
        type: String,
        required: true,
      },
      rating: {
        type: Number,
        required: true,
      },
      comment: {
        type: String,
        required: true,
      },
    },
  ],
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Product = new mongoose.model('AllProduct', productSchema);

module.exports = Product;
