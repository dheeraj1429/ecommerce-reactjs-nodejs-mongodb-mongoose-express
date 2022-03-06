require('dotenv').config();
const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const dbFunction = require('./models/db');
const path = require('path');
const rootFolder = require('./util/rootFolder');
const ejs = require('ejs');

dbFunction();

// File Routes
const indexRouter = require('./routes/indexRoute');
const userRouter = require('./routes/userRoute');
const blogRouter = require('./routes/blogRouter');

const app = express();
const port = process.env.PORT || 8000;

app.engine('ejs', ejs.renderFile);
app.set('view engine', 'ejs');
app.use(express.static(path.join(rootFolder, 'public')));

// Middleware
app.use(cors());
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Routes
app.use('/products', indexRouter);
app.use('/user', userRouter);
app.use('/blog', blogRouter);

// Server
app.listen(port, () => {
   console.log(`server start at localhost:${port}`);
});
