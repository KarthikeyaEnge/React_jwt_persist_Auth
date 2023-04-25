const jwt = require("jsonwebtoken");

const verifyJwt = async (req, res, next) => {
  const token = req.body.token;
  if (!token) res.status(403);

  try {
    await jwt.verify(token, process.env.ACCESS_TOKEN_KEY, (err, decode) => {
      if (err) res.status(403).json({ message: "unauthorized verify" });
      next();
    });
  } catch (err) {
    console.log(err.message);
  }
};

module.exports = verifyJwt;
