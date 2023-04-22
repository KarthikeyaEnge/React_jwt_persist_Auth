const { client } = require("../config/mongoconfig");
const bcrypt = require("bcrypt");

const adduser = async (req, res) => {
  const { email, pass } = req.body;
  const dbc = client.db("myDB").collection("users");
  try {
    /**Checking if the user already exist */
    const fdata = await dbc.findOne({ email: email });

    /** if user does'nt exist then we add him to the database*/
    if (fdata === null) {
      const cryptpass = await bcrypt.hash(pass, 10);
      const data = await dbc.insertOne({ email: email, pass: cryptpass });

      res
        .status(200)
        .json({ message: `inserted sucessfully with id ${data.insertedId}` });
    }
  } catch (err) {
    console.log(err.message);
    res.status(500).json({ message: "cannot add user" });
  }
};

module.exports = adduser;
