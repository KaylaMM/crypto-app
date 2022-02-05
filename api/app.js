const express = require("express");
const app = express();
const PORT = 3001;
const mongoose = require("mongoose");
const { MONGOURL } = require("./keys");
require("./models/user");
app.use(express.json());
app.use(require("./routes/auth"));

mongoose.connect(MONGOURL, {
  useUnifiedTopology: true,
});

mongoose.connection.on("connected", () => {
  console.log("Connected to mongodb");
});

mongoose.connection.on("error", () => {
  console.log("Error");
});

console.log(mongoose.version)

app.get("/", (req, res) => {
  res.send("hello world");
});

app.listen(PORT, () => {
  console.log("Server is running on", PORT);
});
