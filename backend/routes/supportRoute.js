const express = require("express");
const router = express.Router();
const { sendSupport } = require("../controllers/supportController");

router.post("/", sendSupport);

module.exports = router;
