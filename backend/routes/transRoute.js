const express = require("express");
const router = express.Router();
const {
  sendMoney,
  getBalance,
  getHistory
} = require("../controllers/transController");

router.post("/send", sendMoney);
router.get("/balance/:userId", getBalance);
router.get("/history/:userId", getHistory);

module.exports = router;
