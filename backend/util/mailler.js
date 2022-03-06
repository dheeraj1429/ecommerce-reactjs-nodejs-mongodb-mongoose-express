const nodemailer = require('nodemailer');
const cart = require('../cart');

const mailOptionFunction = function () {
   const transporter = nodemailer.createTransport({
      port: 8000,
      service: 'gmail',
      auth: {
         user: cart.USER,
         pass: cart.PASSWORD,
      },
   });

   return transporter;
};

module.exports = {
   mailOptionFunction,
};
