const Usuario = require("./controllers/cadastrarUser")

const api = require("express").Router()

api.post(`/users`,Usuario.cadastrarusuario )

module.exports = api