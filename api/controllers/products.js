const Product = require('../models/product');

const getAllProductStatic = async (_req, res) => {
  const search = 'enter';
  const products = await Product.find({}).sort('name price');
  res.status(200).json({ products, length: products.length });
};

const getAllProduct = async (req, res) => {
  const { featured, company, name, sort, fields } = req.query;
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
  let result = Product.find(queryObject);
  if (sort) {
    const sortList = sort.split(',').join(' ');
    result = result.sort(sortList);
  } else {
    result = result.sort('createdAt');
  }
  if (fields) {
    const fieldList = fields.split(',').join(' ');
    result = result.select(fieldList);
  }
  const page = Number(req.query.page) || 1;
  const limit = Number(req.query.limit) || 10;
  const skip = (page - 1) * limit;
  result.limit(limit).skip(skip);

  const products = await result;
  res.status(200).json({ products, page: page, length: products.length });
};

module.exports = { getAllProductStatic, getAllProduct };
