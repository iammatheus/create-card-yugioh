function deleteCard(req, res){
   const mongoose = require('mongoose')
   require('../models/Card')
   const Card = mongoose.model('createCard')

   Card.deleteOne({_id: req.body.id})
   .then(() => {
      console.log('Deletado com sucesso!')
   }).catch((err) => {
      console.log("Erro ao deletar: " + err)
   })
   res.redirect("/admin/cardList")
}

module.exports = deleteCard