const { Router } = require('express')
const usuarioRoutes = require("./usuarios.route")
const destinoRoutes = require("./destinos.route")

const routes = Router()

routes.use('/usuarios', usuarioRoutes)
routes.use('/destinos', destinoRoutes)

module.exports = routes