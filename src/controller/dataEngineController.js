const axios = require("axios");
const { DataEngineService } = require("../service/index");
const { StatusCodes } = require("http-status-codes");
class DataEngineController {
  constructor() {
    this.dataEngineService = new DataEngineService();
  }

  getDataEngineResult = async (req, res) => {
    try {
      const reponseFromDE = await this.dataEngineService.getDataEngineResult(
        req.body
      );
      res.status(StatusCodes.OK).json({
        message: "Decion Recived",
        statusCode: StatusCodes.OK,
        data: reponseFromDE,
        error: {},
      });
    } catch (err) {
      res.status(StatusCodes.OK).json({
        message: "Error occured",
        statusCode: StatusCodes.OK,
        data: {},
        error: err,
      });
    }
  };
}

module.exports = DataEngineController;
