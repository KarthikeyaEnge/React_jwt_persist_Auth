const { client } = require("../config/mongoconfig");
const jwt = require("jsonwebtoken");
const getinfo = async (req, res) => {
  const token = req.body.token;
  if (!token) res.status(403);
  const data = jwt.verify(token, process.env.ACCESS_TOKEN_KEY);
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
