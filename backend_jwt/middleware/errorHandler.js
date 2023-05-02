const errorHandler = (err, req, res, next) => {
  if (err) {
    console.log(err.message);
    res.status(500).send({ message: err.message });
  }
};

module.exports = errorHandler;
