const express = require("express");
const cors = require("cors");
const config = require("config");
const mongoose = require("mongoose");

const app = express();

app.use(cors());

app.use(express.json({ extended: true }));

app.use("/api/auth", require("../routes/auth.routes"));
app.use("/api/favourite", require("../routes/favourite.routes"));

const PORT = config.get("port") || 5000;

async function start() {
  try {
    await mongoose.connect(config.get("mongoUri"), {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    });
    app.listen(5000, () => console.log(`Server started on port ${PORT}`));
  } catch (e) {
    console.log("Server error", e.message);
    process.exit(1);
  }
}

start();
