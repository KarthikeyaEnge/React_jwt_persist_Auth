const jwt = require("jsonwebtoken");

const refresh = (req, res) => {
  try {
    const cookie = req.cookies;
    if (!cookie?.refresh) res.status(401);
    const refreshtoken = cookie?.refresh;

    const check = jwt.verify(
      process.env.REFRESH_TOKEN_KEY,
      refreshtoken,
      (err, decoded) => {
        if (err) res.json({ message: err });
        const accesstoken = jwt.sign(
          decoded.user,
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
