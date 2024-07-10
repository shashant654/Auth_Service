const express = require("express");
const { PORT } = require("./config/serverConfig");
const bodyParser = require("body-parser");
const apiRoutes = require("./routes/index");

const app = express();

const prepareAndStartServer = () => {
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));

  app.use('/api',apiRoutes)

  app.listen(PORT, async () => {
    console.log(`Server started at ${PORT}`);
  });
};

prepareAndStartServer();
