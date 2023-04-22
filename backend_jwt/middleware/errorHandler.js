const errorHandler = (req, res, next, err) => {
  console.log(err.message);
  next();
};

module.exports = errorHandler;
