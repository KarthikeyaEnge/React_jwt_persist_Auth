const jwt = require("jsonwebtoken");

const verifyJwt = (req, res, next) => {
  const token = req.body.token;
  if (!token) res.status(403);

  try {
    jwt.verify(token, process.env.ACCESS_TOKEN_KEY, (err, decoded) => {
      if (err) res.status(403).json({ message: "unauthorized verify" });
      next();
    });
  } catch (err) {
    console.log(err);
  }
};

module.exports = verifyJwt;
