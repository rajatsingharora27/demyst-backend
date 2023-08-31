const { AccountService } = require("../service/index");
const { StatusCodes } = require("http-status-codes");
class AccountingController {
  constructor() {
    this.accountService = new AccountService();
  }

  getAccountSheetResult = async (req, res) => {
    try {
      const accountData = await this.accountService.getAccountSheet(req.body);

      if (accountData.length > 0) {
        res.status(StatusCodes.OK).json({
          message: "Account Details Fetched Successully",
          statusCode: StatusCodes.OK,
          data: accountData,
          error: {},
        });
      } else {
        res.status(StatusCodes.NOT_FOUND).json({
          message: "Account Details not found",
          statusCode: StatusCodes.NOT_FOUND,
          data: accountData,
          error: {},
        });
      }

      //   console.log(accountData);
    } catch (err) {
      console.log(err);
      res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
        message: "Exception Occured",
        statusCode: StatusCodes.INTERNAL_SERVER_ERROR,
        data: {},
        error: { err },
      });
    }
  };
}

module.exports = AccountingController;
