class Usuario {
  static async cadastrarusuario(req, res) {
    const db = require("./model/modelUser");
    const { nome, email } = req.body;
    console.log(nome,email);
    
    // const database = new db({nome,email})
    // await database.save()
  }
}


module.exports = Usuario