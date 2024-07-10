const express = require("express");
const { PORT } = require("./config/serverConfig");
const bodyParser = require("body-parser");
const apiRoutes = require("./routes/index");

const app = express();

const prepareAndStartServer = () => {
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));

  app.use("/api", apiRoutes);

  app.listen(PORT, async () => {
    console.log(`Server started at ${PORT}`);
  });
};

prepareAndStartServer();

// _______________*****************________________

// const UserRepository = require('./repository/user-repository')

// app.listen(PORT, async () => {
//           console.log(`Server started at ${PORT}`);
//           const repo = new UserRepository()
//           const response = await repo.getById(1)
//           console.log(response);
//         });

// _______________*****************________________
// const UserService = require("./services/user-service");

// app.listen(PORT, async () => {
//           console.log(`Server started at ${PORT}`);
//           const service  = new UserService()
//           const newToken = service.createToken({email: 'bipesh@gmail.com', id: 1})
//           console.log("new token is : ", newToken);
//         });
