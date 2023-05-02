const { client } = require("../config/mongoconfig");
const jwt = require("jsonwebtoken");

require("dotenv").config();

const getinfo = async (req, res) => {
  const token = req.body.token;
  console.log(token);
  if (!token) res.status(403);
  let data;
  jwt.verify(token, process.env.ACCESS_TOKEN_KEY, (err, decoded) => {
    if (err) console.log(err.message);
    else data = decoded;
  });

  console.log(data);
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
