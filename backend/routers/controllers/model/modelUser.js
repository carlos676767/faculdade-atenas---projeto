const { Schema, default: mongoose } = require("mongoose");

class Mongoose {
  static esquemaMongoose() {
    const user =  new Schema({
      nome: { type: String, required: true },
      email: { type: String, required: true },
    });
    mongoose.model("users", user);
  }
}


module.exports = Mongoose

