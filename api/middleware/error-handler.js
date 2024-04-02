const errorHandlerMiddleware = async (err, _req, res, _next) => {
  console.log(err);
  return res
    .status(500)
    .json({ msg: 'Something went wrong, please try again' });
};

module.exports = errorHandlerMiddleware;
