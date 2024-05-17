const { Router, query } = require('express')
const UsuarioController = require('../controllers/UsuarioController');

const usuarioRoutes = new Router() 

usuarioRoutes.post('/cadastrar', UsuarioController.cadastrar)

usuarioRoutes.get('/login', UsuarioController.login)
  
module.exports = usuarioRoutes 