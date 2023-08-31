const axios = require("axios");

class DataEngineService {
  constructor() {}

  getDataEngineResult = async (data) => {
    const payload = this.#generatePayLoadForDataEngine(data);
    const responseFromDE = "";
    // await axios.post("http://dataEngineurl", payload).then((res) => {
    //   responseFromDE = res.data;
    // });
    return payload;
  };

  #generatePayLoadForDataEngine(data) {
    const profitBusiness = this.#isProfiMade(data.sheetDetails);
    const averageAssetValue = this.#getAverageAssetValue(data.sheetDetails);
    const year = data.accountDetails.year;

    var payload = {
      name: data.accountDetails.companyName,
      profitOrLoss: profitBusiness,
      year: year,
      preAssessment: 20,
    };
    console.log(payload);
    if (profitBusiness > 0) {
      payload = { ...payload, preAssessment: 60 };
    }
    if (data.accountDetails.loanAmount > averageAssetValue) {
      payload = { ...payload, preAssessment: 100 };
    }
    return payload;
  }

  #getAverageAssetValue(sheetDetails) {
    var totalYearAssetValue = 0;
    sheetDetails.forEach((ele) => {
      totalYearAssetValue += ele.assetsValue;
    });
    return totalYearAssetValue;
  }

  #isProfiMade(sheetDetails) {
    var profitOrLoss = 0;
    sheetDetails.forEach((ele) => {
      profitOrLoss += ele.profitOrLoss;
    });
    return profitOrLoss / 12;
  }
}

module.exports = DataEngineService;
