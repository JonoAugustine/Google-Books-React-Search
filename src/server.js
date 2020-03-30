const express = require("express");
const cors = require("cors");
const { join } = require("path");
const router = require("./router");

module.exports = async () => {
  const server = express();

  server.use(cors());
  server.use(express.json());

  server.use(express.static(join(__dirname, "..", "site", "build")));

  server.use("/api", router);

  return server;
};
