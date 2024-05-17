const { sign } = require('jsonwebtoken')
const Destino = require("../models/Destino")

class DestinoController{
 async consulta(req, res){
  const cep = req.params.cep

  try{
   const response = await axios.get(`https://nominatim.openstreetmap.org/search?format=json&postalcode=${cep}&country=Brazil&limit=1`);
   console.log(resultado.data)
   res.status(200).json(resultado.data)
  } catch(error) {
     console.error("Erro ao consultar o CEP", error)
     res.status(500).send({ error: 'Erro ao processar a solicitação' });
  }
}

async cadastrar(req, res) {
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
    
   const data = await fetch(
      `https://nominatim.openstreetmap.org/search?format=json&postalcode=${cep}&country=Brazil&limit=1`
      )

   const destino = await Destino.create({
    destino_nome: destino_nome,
    localizacao: localizacao,
    descricao: descricao,
    cep: cep,
    latitude: data[0].lat,
    longitude: data[0].lon
   })
res.status(201).json(destino)

 } 
 async excluir(req, res) {
  const { destino_id } = req.params

  DestinoController.destroy({
   where: {
    destino_id: destino_id
   }
  })
 
  res.status(204).json()
 }

 async listarPorId(req, res) {
  destinoRoutes.get('/destinos/:cep', async (req, res) => {
   try{
    
    const {id} = req.params[[]]

 }
})
 }
 
 }



module.exports = new DestinoController()
 
