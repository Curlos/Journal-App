const config = require("./utils/config");
const express = require("express");
const app = express();

const cors = require("cors");
const notesRouter = require("./controllers/notes");
const mongoose = require("mongoose");

console.log("connecting to MongoDB");

mongoose
        .connect(config.MONGODB_URI, {
          useNewUrlParser: true,
          useUnifiedTopology: true,
          useFindAndModify: false,
          useCreateIndex: true,
        })
        .then(() => {
          console.log("connected to MongoDB");
        })
        .catch((error) => {
          console.log("error connecting to MongoDB: ", error.message);
        });

app.use(cors());
app.use(express.json());

app.use("/api/notes", notesRouter);

// Testing
if (process.env.NODE_ENV === "test") {
  const testingRouter = require("./controllers/testing");
  app.use("/api/testing", testingRouter);
}

module.exports = app;

