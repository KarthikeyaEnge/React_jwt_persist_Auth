const bcrypt = require("bcrypt");
const { client } = require("../config/mongoconfig");
const jwt = require("jsonwebtoken");
const getinfo = async (req, res) => {
  const data = jwt.verify(req.body.token, process.env.ACCESS_TOKEN_KEY);
  const dbc = client.db("myDB").collection("users");
  try {
    const fdata = await dbc.findOne({ email: data.user });
    fdata ? res.status(200).json({ user: fdata.email }) : res.status(403);
  } catch (err) {
    console.log(err.message);
    res.status(404);
  }
};

module.exports = getinfo;
