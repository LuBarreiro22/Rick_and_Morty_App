const express = require("express");
const server = express();
const morgan = require("morgan");
const router = require("./routes/index");
const favsRouter = require("./routes/favsRouter");
const cors = require("cors");
const PORT = 3001;

server.use(express.json());
server.use(cors());
server.use(morgan("dev"));
server.use("/rickandmorty", router);
server.use("/favs", favsRouter);

server.listen(PORT, () => {
  console.log("Server raised in port " + PORT);
});
