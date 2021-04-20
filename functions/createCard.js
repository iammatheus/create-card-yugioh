function card(req, res){
   const mongoose = require('mongoose')
   require('../models/Card')
   const Card = mongoose.model('createCard')

   const newCard = {
      image: req.file.filename,
      level: req.body.level,
      type: req.body.type,
      attribute: req.body.attribute,
      attack: req.body.attack,
      defense: req.body.defense,
      name: req.body.name
   }
   // const {image, level, type, attribute, attack, defense, name } = newCard
   
   new Card(newCard)
      .save()
      .then(() => {
         console.log('Carta criada com sucesso!')
         res.redirect('/')
      }).catch((err) => {
         console.log('Erro, preencha os campos!')
         res.redirect('/admin/card')
      })
}

module.exports = card