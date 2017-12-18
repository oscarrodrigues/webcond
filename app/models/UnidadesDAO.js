function UnidadesDAO(connection){
  this._connection = connection
}

UnidadesDAO.prototype.getUnidades = function(callback){
  this._connection.query('SELECT * FROM unidades ORDER BY unidade', callback)
}

UnidadesDAO.prototype.getUnidade = function(unidade, callback){
  this._connection.query('SELECT * FROM unidades WHERE id_unidade = ' + unidade.id_unidade, callback)
}

UnidadesDAO.prototype.pesquisarUnidade = function(unidade, callback){
  //console.log(unidade.pesquisa);
  this._connection.query('SELECT * FROM unidades WHERE unidade LIKE \'%' + unidade.pesquisa + '%\' OR usuario like \'%' + unidade.pesquisa + '%\' OR proprietario like \'%' + unidade.pesquisa + '%\' OR email like \'%' + unidade.pesquisa + '%\'', callback)
}

UnidadesDAO.prototype.salvarUnidade = function(unidade, callback){
  this._connection.query('INSERT INTO unidades SET ?', unidade, callback )
}

UnidadesDAO.prototype.atualizarUnidade = function(unidade, callback){
  this._connection.query('UPDATE unidades SET ? WHERE id_unidade =' + unidade.id_unidade, unidade, callback)
}

UnidadesDAO.prototype.excluirUnidade = function(unidade, callback){
  this._connection.query('DELETE FROM unidades WHERE id_unidade = ' + unidade.id_unidade, callback)
}

module.exports = function(){
  return UnidadesDAO
}
