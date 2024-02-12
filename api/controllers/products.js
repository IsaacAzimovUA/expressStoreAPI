const Product = require('../models/product');

const getAllProductStatic = async (req, res) => {
  const products = await Product.find({ featured: true });
  res.status(200).json({ products, length: products.length });
};

const getAllProduct = async (req, res) => {
  const products = await Product.find(req.query);
  res.status(200).json({ products, length: products.length });
};

module.exports = { getAllProductStatic, getAllProduct };
