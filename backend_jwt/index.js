const express = require("express");
const app = express();
require("dotenv").config();
const PORT = process.env.PORT;
const { mongoconfig, client } = require("./config/mongoconfig");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const corsOptions = require("./config/corsOptions");

app.use(cors());

app.use(express.json());

app.use(mongoconfig);
//**cookie parsing */
app.use(cookieParser(corsOptions));
/* app.route("/").get(require("./test")); */

/**this app level router handles all the requests for user */
app.use("/users", require("./Routes/user"));

app.route("/verifyjwt").post(require("./controllers/verifyJwt"));

/**rotuer use to get the info */
app.route("/info").post(require("./controllers/getinfo"));

/**router for logout */
app.route("/logout").get(require("./controllers/logout"));

/**error handler */
app.use(require("./middleware/errorHandler"));
app.listen(PORT, () => {
  console.log(`Running in port ${PORT}`);
});
