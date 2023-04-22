const jwt = require("jsonwebtoken");

const verifyJwt = async (req, res, next) => {
  const token = req.headers["auth"];
  if (!token) res.status(403);

  try {
    await jwt.verify(process.env.ACCESS_TOKEN_KEY, token, (err, decode) => {
      if (err) res.send(403).json({ message: "unauthorized" });
      next();
    });
  } catch (err) {
    console.log(err.message);
  }
};

module.exports = verifyJwt;
