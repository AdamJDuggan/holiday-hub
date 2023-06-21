const express = require("express");

const { checkDuplicateUsernameOrEmail } = require("../../middleware/auth.js");
const { signUp, login } = require("./auth.controller.js");

const authRouter = express.Router();

authRouter.post("/signup", checkDuplicateUsernameOrEmail, signUp);

authRouter.post("/login", login);

module.exports = authRouter;
