const express = require("express");
const cors = require("cors");
const path = require("path");
const morgan = require("morgan");

const api = require("./routes/api");

const app = express();

app.use(cors({ origin: "http://localhost:8000" }));
app.use(morgan("combined"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, "..", "public")));
app.use(api);
// If we had multiple versions...n
//app.use("/v2", v2Router);

app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "public/", "index.html"));
});

module.exports = app;
