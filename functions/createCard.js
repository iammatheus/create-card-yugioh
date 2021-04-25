async function card(req, res){
   const imgur = require("imgur");
   const fs = require("fs");

   const mongoose = require('mongoose')
   require('../models/Card')
   const Card = mongoose.model('createCard')
   
   let file = req.file;
   let image = req.body.image
   let url = `./public/uploads/${file.filename}`
   try {
     url = await imgur.uploadFile(url);
     fs.unlinkSync(`./public/uploads/${file.filename}`);
   } catch (error) {
     console.log("Erro! Link não encontrado.: ", error);
   }

   image = url.link;
   
   const newCard = {
      image,
      level: req.body.level,
      type: req.body.type,
      attribute: req.body.attribute,
      attack: req.body.attack,
      defense: req.body.defense,
      name: req.body.name,
      author: req.body.author
   }

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