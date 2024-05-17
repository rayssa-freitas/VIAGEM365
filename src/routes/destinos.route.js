const { Router } = require('express') 

const DestinoController = require('../controllers/DestinoController')
const Destino
const destinoRoutes = new Router()

destinoRoutes.get('/destinos/:cep', async (req, res) => {
   const cep = req.params.cep

   try{

    const response = await axios.get(`https://nominatim.openstreetmap.org/search?format=json&postalcode=${cep}&country=Brazil&limit=1`);

    console.log()
   }
})

destinoRoutes.get('/:id', async (req, res) => {
   try{
    
    const {id} = req.params[[]]

 }
})
destinoRoutes.post('/criarnovodestino', async (req, res) => {

  try{
   const destino_nome = req.body.destino_nome,
   const localizacao = req.body.localizacao,
   const descricao = req.body.descricao,
   const cep = req.body.cep,
   const latitude = req.body.latitude,
   const longitude = req.body.longitude

   if(!destino_nome) {
    return res.status(400).json({
     message: 'O preenchimento do campo destino é obrigatório!'
    })
   }

   if(!localizacao) {
    return res.status(400).json({
     message: 'O preenchimento do campo localização é obrigatório!'
    })
   }

   if(!cep) {
    return res.status(400).json({
     message: 'O preenchimento do campo cep é obrigatório!'
    })
   }

   if(!latitude) {
    return res.status(400).json({
     message: 'O preenchimento do campo latitude é obrigatório!'
    })
   }

   if(!longitude) {
    return res.status(400).json({
     message: 'O preenchimento do campo longitude é obrigatório!'
    })
   }
    
   const destino = await Destino.create({
    destino_nome: destino_nome,
    localizacao: localizacao,
    descricao: descricao,
    cep: cep,
    latitude: latitude, 
    longitude: longitude
})
res.status(201).json(usuario)
    }catch (error) {
      console.error(error.message)
      res.status(500).json({
      error: 'Não foi realizar o seu cadastro. Tente Novamente!'
 })
}
}



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