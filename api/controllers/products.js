const Product = require('../models/product');

const getAllProductStatic = async (req, res) => {
  const products = await Product.find({ featured: true });
  res.status(200).json({ products, length: products.length });
};

const getAllProduct = async (req, res) => {
  res.status(200).json({
    msg: 'product route',
  });
};

module.exports = { getAllProductStatic, getAllProduct };
