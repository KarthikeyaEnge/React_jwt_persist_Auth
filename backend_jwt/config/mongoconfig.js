const { MongoClient } = require("mongodb");
const client = new MongoClient(process.env.URL);

const mongoconfig = async (req, res, next) => {
  try {
    await client.connect();
    console.log(`connected the mongodb client`);
    next();
  } catch (err) {
    console.log(err.message);
  }
};

module.exports = { mongoconfig, client };
