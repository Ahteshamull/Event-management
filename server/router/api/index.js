const express = require("express");
const router = express.Router();
const auth = require("./auth");
const event = require("./event");


//localhost:3000/api/v1/auth/
http: router.use("/auth", auth);
//localhost:3000/api/v1/category/
http: router.use("/event", event);

module.exports = router;
