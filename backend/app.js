const express = require('express');
const cors = require('cors');

require('./models/db');
const indexRouter = require('./routes/indexRoute');

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const port = process.env.PORT || 5000;

// Middleware
app.use(express.json());
app.use(cors());

// Routes
app.use('/products', indexRouter);

// Server
app.listen(port, () => {
  console.log(`server start at localhost:${port}`);
});
