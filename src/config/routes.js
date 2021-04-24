const express = require("express")
const router = express.Router()
const createCard = require("../../functions/createCard")
const deleteCard = require("../../functions/deleteCard")
const listCardIndex = require("../../functions/listCardIndex")
const listCard = require("../../functions/listCard")
const upload = require("./configMulter")

//Home
router.get('/', (req, res) => {
   listCardIndex(req, res)
})

//Listar cartas
router.get('/admin/cardList', (req, res) => {
   listCard(req, res)
})

//Criar cartas
router.get('/admin/card', (req, res) => {
   res.render('admin/card')
})

router.post('/card/create', upload.single('image'),  async (req, res) => {
   createCard(req, res)
})

//Deletar cartas
router.post('/card/delete', async (req, res) => {
   deleteCard(req, res)
})

module.exports = router