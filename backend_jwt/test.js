const { client } = require("./config/mongoconfig");

const dbc = client.db("myDB").collection("user");

const add = async (req, res) => {
  const dta = await dbc.insertOne({
    name: "Asta",
    age: 25,
  });

  console.log(dta);
  res.send(dta);
};

module.exports = add;
