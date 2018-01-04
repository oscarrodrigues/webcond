function PagamentosDAO(connection){
  this._connection = connection
}

PagamentosDAO.prototype.getCicloPagamentos = function(callback){
  this._connection.query('SELECT * FROM ciclopagamentos ORDER BY ano', callback)
}

PagamentosDAO.prototype.getCicloPagamento = function(ciclopagamentos, callback){
  this._connection.query('SELECT * FROM ciclopagamentos WHERE id_ciclopagamentos = ' + ciclopagamentos.id_ciclopagamentos, callback)
}

//PagamentosDAO.prototype.pesquisarCicloPagamentos = function(ciclopagamentos, callback){
  //console.log(unidade.pesquisa);
//  this._connection.query('SELECT * FROM ciclopagamentos WHERE id_ciclopagamentos LIKE \'%' + unidade.pesquisa + '%\' OR usuario like \'%' + unidade.pesquisa + '%\' OR proprietario like \'%' + unidade.pesquisa + '%\' OR email like \'%' + unidade.pesquisa + '%\'', callback)
//}

PagamentosDAO.prototype.salvarCicloPagamentos = function(ciclopagamentos, callback){
  this._connection.query('INSERT INTO ciclopagamentos SET ?', unidade, callback )
}

PagamentosDAO.prototype.atualizarCicloPagamentos = function(ciclopagamentos, callback){
  this._connection.query('UPDATE ciclopagamentos SET ? WHERE id_ciclopagamentos =' + ciclopagamentos.id_ciclopagamentos, unidade, callback)
}

PagamentosDAO.prototype.excluirCicloPagamentos = function(ciclopagamentos, callback){
  this._connection.query('DELETE FROM ciclopagamentos WHERE id_ciclopagamentos = ' + ciclopagamentos.id_ciclopagamentos, callback)
}

module.exports = function(){
  return PagamentosDAO
}
