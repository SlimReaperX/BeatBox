const express = require("express");
const router = express.Router();

router.use("/users", require("./users.cjs"));
router.use("/auth", require("./auth.cjs"));

module.exports = router;
