const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");

//Route files
const books = require("./routes/books");

//Load env vars
dotenv.config({ path: "./config/config.env" });

//Connect to database
connectDB();

const app = express();

//Body Parser
app.use(express.json());

//Mount routers
app.use("/api/v1/books", books);

const PORT = process.env.PORT || 5000;

const server = app.listen(PORT);

//Handle unhandled promise rejections
process.on("unhandledRejection", (err, promise) => {
  console.log(`Error : ${err.message}`);

  //close server and exit process
  server.close(() => process.exit(1));
});
