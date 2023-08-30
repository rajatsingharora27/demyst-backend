const { AccountService } = require("../service/index");
class AccountingController {
  constructor() {
    this.accountService = new AccountService();
  }

  getAccountSheetResult = async (req, res) => {
    try {
      await this.accountService.getAccountSheet(req.body);
    } catch (err) {}
  };
}

module.exports = AccountingController;
