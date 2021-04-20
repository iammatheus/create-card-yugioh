function listCard(req, res){
   const mongoose = require('mongoose')
   require('../models/Card')
   const Card = mongoose.model('createCard')
   
   Card.find()
   .then((cardList) => {
      res.render('admin/cardList', { cardList })
   }).catch((err) => {
      console.log("Erro ao listar cartas: " + err)
      res.redirect('/')
   })
}

module.exports = listCard