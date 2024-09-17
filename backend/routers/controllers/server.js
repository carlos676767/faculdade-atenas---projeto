const MongooseDatabase = require("./db/db");

class Express {
  static #api = require("express")();

  static expressConfig() {
    const port = 8080 || process.env.PORT;
    this.#api.listen(port, async () => {
      await MongooseDatabase.ConnectDatabase();
      console.log(`Servidor rodando na porta ${port}`);
    });
  }
}



Express.expressConfig();


