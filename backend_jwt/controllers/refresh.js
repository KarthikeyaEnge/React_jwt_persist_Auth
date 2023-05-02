const jwt = require("jsonwebtoken");
require("dotenv").config();
const refresh = (req, res) => {
  try {
    const cookie = req.cookies;
    const head = req.headers;
    if (!cookie?.refresh) res.status(401);
    const refreshtoken = cookie?.refresh;
    const check = jwt.verify(
      refreshtoken,
      process.env.REFRESH_TOKEN_KEY,
      (err, decoded) => {
        if (err) res.json({ message: err });

        const accesstoken = jwt.sign(
          {
            user: decoded.user,
          },
          process.env.ACCESS_TOKEN_KEY,
          { expiresIn: "50s" }
        );
        res.status(200).json({ accesstoken: accesstoken });
      }
    );
  } catch (err) {
    console.log(err.message);
    res.status(500);
  }
};

module.exports = refresh;
