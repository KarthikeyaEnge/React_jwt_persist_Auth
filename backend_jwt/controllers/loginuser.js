const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { client } = require("../config/mongoconfig");

require("dotenv").config();

const loginuser = async (req, res) => {
  const { email, pass } = req.body;
  console.log(email);
  const dbc = client.db("myDB").collection("users");
  try {
    const fdata = await dbc.findOne({ email: email });
    if (fdata) {
      const check = await bcrypt.compare(pass, fdata.pass);

      if (check) {
        const accesstoken = jwt.sign(
          {
            user: fdata.email,
          },
          process.env.ACCESS_TOKEN_KEY,
          { expiresIn: "50s" }
        );
        const refreshtoken = jwt.sign(
          {
            user: fdata.email,
          },
          process.env.REFRESH_TOKEN_KEY,
          { expiresIn: "1d" }
        );
        res.cookie("refresh", refreshtoken, {
          httpOnly: true,
          maxAge: 1000 * 60 * 60 * 24,
        });
        res.json({ Bearer: accesstoken });
      } else {
        res.status(403).json({ message: "Not Authorized" });
      }
    } else {
      res.status(404).json({ message: "user not found" });
    }
  } catch (err) {
    console.log(err.message);
    res.status(500).json({ message: "Server Error" });
  }
};
module.exports = loginuser;
