const Product = require('../models/product');

const getAllProductStatic = async (_req, res) => {
  const search = 'enter';
  const products = await Product.find({
    name: { $regex: search, $options: 'i' },
  });
  res.status(200).json({ products, length: products.length });
};

const getAllProduct = async (req, res) => {
  const { featured, company, name } = req.query;
  const queryObject = {};
  if (featured) {
    queryObject.featured = featured === 'true' ? true : false;
  }
  if (company) {
    queryObject.company = company;
  }
  if (name) {
    queryObject.name = { $regex: name, $options: 'i' };
  }

  const products = await Product.find(queryObject);
  res.status(200).json({ products, length: products.length });
};

module.exports = { getAllProductStatic, getAllProduct };
