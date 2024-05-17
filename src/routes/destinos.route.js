const { Router } = require('express') 

const DestinoController = require('../controllers/DestinoController')

const { auth } = require('../middleware/auth')

const destinoRoutes = new Router()

destinoRoutes.get('/destinos', async (req, res) => {

})

destinoRoutes.get('/destino:cep', async (req, res))
destinoRoutes.post('/criarnovodestino', async (req, res) => {
 
})
destinoRoutes.put('/atualizardestino:id', async (req, res) => {
 
})
destinoRoutes.delete('/atualizardestino:id', async (req, res) => {
 const { destino_id } = req.params

 DestinoController.destroy({
  where: {
   destino_id: destino_id
  }
 })

 res.status(204).json({})
})

module.exports = destinoRoutes 