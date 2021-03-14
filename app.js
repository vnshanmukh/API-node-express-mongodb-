require("dotenv").config;
const express = require("express");

const mongoose = require("mongoose");

let app = express();

app.use(express.json());

app.listen(5000, () => console.log("Started"));
mongoose.Promise = global.Promise;
mongoose.connect(
  process.env.DATABASE_URL,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => console.log("connected")
);

const subRouter = require("./routers/sub");

app.use("/sub", subRouter);

app.get("/", (req, res) => {
  res.send("home");
});
