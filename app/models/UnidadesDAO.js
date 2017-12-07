function UnidadesDAO(connection){
  this._connection = connection
}

UnidadesDAO.prototype.getUnidades = function(callback){
  this._connection.query('select * from unidades', callback)
}

UnidadesDAO.prototype.getUnidade = function(callback){
  this._connection.query('select * from unidades where id_noticia = 2', callback)
}

UnidadesDAO.prototype.salvarUnidade = function(unidade, callback){
  this._connection.query('insert into unidades set ?', unidade, callback )
}

module.exports = function(){
  return UnidadesDAO
}
