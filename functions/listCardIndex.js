function listCardIndex(req, res){
   const mongoose = require('mongoose')
   require('../models/Card')
   const Card = mongoose.model('createCard')
   
   Card.find()
   .then((cards) => {
      res.render('layouts/index', { cards })
   }).catch((err) => {
      console.log("Erro ao listar cartas: " + err)
      res.redirect('/')
   })
}

module.exports = listCardIndex