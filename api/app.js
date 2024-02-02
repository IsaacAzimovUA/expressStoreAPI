require('dotenv').config();

const express = require('express');
const app = express();

const notFoundMiddleware = require('./middleware/not-found');
const errorHandlerMiddleware = require('./middleware/error-handler.js');

app.use(express.json());
// routes
app.get('/', (req, res) =>
  res.send('<h1>Store API</h1><a href="/api/v1/products">product route</a>')
);
//product routes
app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

//vars
const port = process.env.PORT || 3000;

const start = async () => {
  try {
    //connect to DB
    app.listen(port, console.log(`Server listen on port ${port}...`));
  } catch (error) {
    throw new Error(error);
  }
};
start();
