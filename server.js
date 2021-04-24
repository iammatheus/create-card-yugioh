require('dotenv').config()
const express = require('express')
const handlebars = require('express-handlebars')
const cors = require("cors");
const path = require('path')
const server = express()
const routes = require('./src/config/routes')
const mongoose = require('mongoose')

//Configuração banco de dados
mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGO_URL)
.then(() => {
   console.log("Conectado ao banco")
}).catch((err) => {
   console.log("Erro conexão banco: " + err)
})

//Configurando BodyParser
server.use(express.urlencoded({ extended: true }))
server.use(express.json())

//Configurando handlebars
server.engine('handlebars', handlebars({
   defaultLayout: 'main',
   runtimeOptions: {
      allowProtoPropertiesByDefault: true,
      allowProtoMethodsByDefault: true,
  },
}))
server.set('view engine', 'handlebars')

//Configurando arquivos Public
server.use(express.static(path.join(__dirname, 'public')))

//Configurando cors
server.use(cors());

//Rotas
server.use('/', routes)
server.use('/admin', routes)


//Servidor
const PORT = process.env.PORT || 8080
server.listen(PORT)