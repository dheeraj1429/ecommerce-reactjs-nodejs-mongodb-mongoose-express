const express = require('express');
const cors = require('cors');

require('./models/db');

const indexRouter = require('./routes/indexRoute');
const userRouter = require('./routes/userRouter');

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const port = process.env.PORT || 5000;

// Middleware
app.use(express.json());
app.use(cors());

// Routes
app.use('/products', indexRouter);
app.use('/user', userRouter);

// Server
app.listen(port, () => {
  console.log(`server start at localhost:${port}`);
});
