const jwt = require("jsonwebtoken");
require("dotenv").config();

const verifyJwt = (req, res) => {
  const token = req.body.token;
  console.log(token);
  if (!token) res.status(403);

  try {
    if (token) {
      jwt.verify(token, process.env.ACCESS_TOKEN_KEY, (err, decoded) => {
        console.log(decoded);
        if (err) res.status(403).json({ message: "unauthorized verify" });
        res.status(200).json({ message: "ok" });
      });
    }
  } catch (err) {
    console.log(err.message);
  }
};

module.exports = verifyJwt;
