const express = require("express");
const jsend = require("jsend");

const app = express();

const cors = require("cors");
app.use(cors());

app.use(jsend.middleware);

app.use(express.json());

app.use(express.urlencoded({ extended: false }));

const userRouter = require("./components/user/user.route");
app.use("/", userRouter);

const { errorHandler } = require("./components/error/error.middleware");
app.use(errorHandler);

module.exports = app;
