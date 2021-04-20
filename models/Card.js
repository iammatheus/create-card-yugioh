const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Card = new Schema({
   image: {
      type: String,
      required: true
   },
   level: {
      type: String,
      required: true
   },
   type: {
      type: String,
      required: true
   },
   attribute: {
      type: String,
      required: true
   },
   attack: {
      type: String,
      required: true
   },
   defense: {
      type: String,
      required: true
   },
   name: {
      type: String,
      required: true
   }
})

mongoose.model('createCard', Card)