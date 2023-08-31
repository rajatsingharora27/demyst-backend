const express = require("express");
const router = express.Router();
const {
  AccountingController,
  DataEngineController,
} = require("../../controller/index");

const accountingController = new AccountingController();
const dataEngineController = new DataEngineController();

router.post("/account-detail", accountingController.getAccountSheetResult);
router.post("/decision-engine", dataEngineController.getDataEngineResult);

module.exports = router;
