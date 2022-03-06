const mongooose = require('mongoose');

const dbConnection = function () {
   mongooose
      .connect('mongodb://localhost:27017/Ecommerce')
      .then(() => {
         console.log('Connected..');
      })
      .catch((err) => {
         console.log(err);
      });
};

module.exports = dbConnection;
