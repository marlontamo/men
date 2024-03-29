const path = require("path");
const express = require("express");
const dotenv = require("dotenv").config();

const port = process.env.PORT || 5000;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/goals", require("./routes/goalRoutes"));

app.get("/", (req, res) => {
  res.send("wow server is now running!!!");
});
app.listen(port, () => console.log(`Server started on port ${port}`));
