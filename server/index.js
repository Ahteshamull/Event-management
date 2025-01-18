const express = require("express");
require("dotenv").config();
const DbConnect = require("./config/DbConnect");
const app = express();
const cors = require("cors")
app.use(express.json());
app.use(cors())

DbConnect();

//http://localhost:5000

app.use((req, res) => {
  return res.status(404).send("404 Not Found");
});
app.listen(process.env.SERVER_PORT || 8080, () => {
  console.log("Server Is Running");
});
