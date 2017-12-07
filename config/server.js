// Carrega o modulo do Express.
var express = require('express')
// Carrega o modulo do consign.
var consign = require('consign')
// Carrega o modulo do body-parser.
var bodyParser = require('body-parser')
// Carrega o modulo do express-validator
var expressValidator = require('express-validator')


// Armazena a instancia do Express na variavel app.
var app = express()
// Configura como engine de view o modulo EJS.
app.set('view engine', 'ejs')
// Especifica o diretorio de views.
app.set('views', './app/views')


// Especifia o diretorio com conteudo estatico.
app.use(express.static('public/sbadmin'));
// Cria um middleware para que o bodyParser recupere os dados via post no formato json.
app.use(bodyParser.urlencoded({extended : true}))
// Configura o middleware express-validator.
app.use(expressValidator())


// Realiza o autoload das rotas e da conexao do bd para dentro da app.
consign()
  .include('app/routes')
  .then('config/dbConnection.js')
  .then('app/models')
  .into(app)

// Exporta o objeto app.
module.exports = app
