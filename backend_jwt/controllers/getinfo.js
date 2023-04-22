const bcrypt = require("bcrypt");
const { client } = require("../config/mongoconfig");

const getinfo = async (req, res) => {
  const { email, pass } = req.body;
  const dbc = client.db("myDB").collection("users");
  try {
    const fdata = await dbc.findOne({ email: email });
    res.status(200).json({ user: fdata.user });
  } catch (err) {
    console.log(err.message);
    res.status(404);
  }
};

module.exports = getinfo;
