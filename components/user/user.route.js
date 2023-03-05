const express = require("express");

const errorHelper = require("../error/error.helper");

const controller = require("./user.controller");

const router = express.Router();

// return a json list of all tracked accounts.
router.post("/accounts", errorHelper.asyncHandler(controller.accounts));

// return a json of the user's conversation threads since start.
router.post("/tweets", errorHelper.asyncHandler(controller.tweets));

// return a json of information about the audience for a user's account.
router.post("/audience", errorHelper.asyncHandler(controller.audience));

// return a json about the sentiment information of an account (e.g. thread level, audience level)
router.post("/sentiment", errorHelper.asyncHandler(controller.sentiment));

module.exports = router;
