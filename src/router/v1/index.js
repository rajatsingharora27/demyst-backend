const express = require("express");
const router = express.Router();
const { AccountingController } = require("../../controller/index");

const accountingController = new AccountingController();

router.post("/account-detail", accountingController.getAccountSheetResult);

module.exports = router;
