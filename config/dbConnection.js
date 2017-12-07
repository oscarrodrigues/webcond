// Carrega o modulo do MySQL.
var mysql = require('mysql')

// Cria a variavel connMysql que recebe a funcao de conexao com o bd.
var connMysql = function(){
  //console.log("Conexao com bd foi estabelecida")
  return mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password : '',
    database : 'webcond'
  })
}

// Exporta a funcao de callback que retorna a variavel connMysql.
module.exports = function(){
  //console.log("O autoload carregou o modulo de conexao com bd.");
  return connMysql
}
