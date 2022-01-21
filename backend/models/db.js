const mongooose = require('mongoose');

mongooose
  .connect('mongodb://localhost:27017/Ecommerce')
  .then(() => {
    console.log('Connected..');
  })
  .catch((err) => {
    console.log(err);
  });
