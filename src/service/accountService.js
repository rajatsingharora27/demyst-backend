const axios = require("axios");
const sheet = require("../Mock/mock");
const { StatusCodes } = require("http-status-codes");
class AccountService {
  constructor() {}

  getAccountSheet = async (data) => {
    try {
      const accountData = [];
      // console.log(data);
      //validation of the data
      //if validation is successful
      // send to accounting service
      await axios.post("account_sevice_url", data).then((res) => {
        accountData = res.data;
      });
      return accountData;
    } catch (err) {
      console.log(err);
      throw err;
    }
  };
}

module.exports = AccountService;
