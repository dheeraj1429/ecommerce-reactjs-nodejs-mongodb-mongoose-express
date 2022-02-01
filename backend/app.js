require('dotenv').config();
const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');

require('./models/db');

const indexRouter = require('./routes/indexRoute');
const userRouter = require('./routes/userRoute');

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));

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
