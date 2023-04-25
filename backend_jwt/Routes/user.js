const express = require("express");

const router = express.Router();

/**this route handles the  user registration*/
router.route("/add").post(require("../controllers/adduser"));

/**this route handles the user login provides the accesstoken*/
router.route("/login").post(require("../controllers/loginuser"));

/**this route is used to provide the refresh token */
router.route("/refresh").get(require("../controllers/refresh"));

module.exports = router;
