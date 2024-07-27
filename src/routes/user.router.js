const { getAll, getOne } = require('../controllers/user.controller');
const express = require('express');

const userRouter = express.Router();

userRouter.route("/")
		.get(getAll)
        .post(getOne)

module.exports = userRouter;