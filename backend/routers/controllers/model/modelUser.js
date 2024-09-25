const { Schema, default: mongoose } = require("mongoose");
const user =  new Schema({
  nome: { type: String, required: true },
  email: { type: String, required: true },
})

module.exports = mongoose.model("users", user);

