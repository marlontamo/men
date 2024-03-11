const path = require("path");
const express = require("express");
//const colors = require('colors');
const dotenv = require("dotenv").config();
//const { errorHandler } = require('./middleware/errorMiddleware');
//const connectDB = require('./config/db');
const port = process.env.PORT || 5000;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/goals", require("./routes/goalRoutes"));
// app.use("/api/users", require("./routes/userRoutes"));
app.get("/api/goal", (req, res) => {
  res.json({ message: "Hello World" });
});
app.get("/", (req, res) => {
  res.send("wow server is now running!!!");
});
app.listen(port, () => console.log(`Server started on port ${port}`));
