const express = require("express");
const app = express();
require("dotenv").config();
const PORT = process.env.PORT;
const { mongoconfig, client } = require("./config/mongoconfig");
const cors = require("cors");

app.use(cors());

app.use(express.json());

app.use(mongoconfig);

/* app.route("/").get(require("./test")); */

/**this app level router handles all the requests for user */
app.use("/users", require("./Routes/user"));

/**error handler */

app.use(require("./middleware/errorHandler"));
app.listen(PORT, () => {
  console.log(`Running in port ${PORT}`);
});
