class MongooseDatabase {
  static mongoose = require("mongoose");
  static url = "";
  static async ConnectDatabase() {
    try {
      await this.mongoose.connect(this.url);
      console.log("db connect Mongodb");
    } catch (error) {
      console.error(error);
    }
  }
}

module.exports = MongooseDatabase