require('dotenv').config();

const connectDB = require('./db/connect');
const Product = require('./models/product');
const productData = require('./products.json');

const start = async () => {
  try {
    await connectDB(process.env.DB_URI);
    await Product.deleteMany();
    await Product.create(productData);
    console.log('Success');
  } catch (error) {
    console.log(error);
  }
};
start();
