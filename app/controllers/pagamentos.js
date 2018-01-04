module.exports.pagamentos = function(app, req, res){
  // Carrega a funcao de conexao com bd exportada via autoload.
  var connection = app.config.dbConnection()
  // Carrega o model de unidades.
  var pagamentosModel = new app.app.models.PagamentosDAO(connection)

  pagamentosModel.getCicloPagamentos(function(error, result){
      res.render('pagamentos/pagamentos', { ciclopagamentos : result})
  })
}


module.exports.adicionarCicloPagamentos = function(app, req, res){
  res.render('pagamentos/addPagamentos', {validacao : {}, pagamentos : {}})
}


module.exports.salvarUnidade = function(app, req, res){
  var unidade = req.body

  // Validacao dos campos enviados para request via post do formulario.
  req.assert('unidade', 'A identificação da unidade é obrigatório').notEmpty()
  req.assert('proprietario', 'O nome do proprietário é obrigatório.').notEmpty()
  req.assert('email', 'O email deve conter um formato válido.').isEmail()
  req.assert('telefone', 'O telefone é obrigatório e deve conter apenas números.').isInt()

  // Se houver erros envia os dados da variavel "errors" para variavel "validacao" que eh passada para view form_add_noticia.
  var erros = req.validationErrors()
  if(erros){
    res.render("unidades/addUnidade", {validacao : erros, unidade : unidade})
    return
  }

  // Carrega a funcao de conexao com bd exportada via autoload.
  var connection = app.config.dbConnection()
  // Carrega o model de unidades.
  var unidadesModel = new app.app.models.UnidadesDAO(connection)

  unidadesModel.salvarUnidade(unidade, function(error, result){
    res.redirect('/unidades')
  })
}


module.exports.pesquisarUnidade = function(app, req, res) {
  var unidade = req.body

  // Carrega a funcao de conexao com bd exportada via autoload.
  var connection = app.config.dbConnection()
  // Carrega o model de unidades.
  var unidadesModel = new app.app.models.UnidadesDAO(connection)

  unidadesModel.pesquisarUnidade(unidade, function(error, result){
    res.render('unidades/unidades', {unidades : result})
  })
}


module.exports.editarUnidade = function(app, req, res) {
  var unidade = req.query

  // Carrega a funcao de conexao com bd exportada via autoload.
  var connection = app.config.dbConnection()
  // Carrega o model de unidades.
  var unidadesModel = new app.app.models.UnidadesDAO(connection)

  unidadesModel.getUnidade(unidade, function(error, result){
    res.render('unidades/editUnidade', {validacao : {}, unidade : result[0]})
  })
}


module.exports.atualizarUnidade = function(app, req, res) {
  var unidade = req.body

  // Validacao dos campos enviados para request via post do formulario.
  req.assert('unidade', 'A identificação da unidade é obrigatório').notEmpty()
  req.assert('proprietario', 'O nome do proprietário é obrigatório.').notEmpty()
  req.assert('email', 'O email deve conter um formato válido.').isEmail()
  req.assert('telefone', 'O telefone é obrigatório e deve conter apenas números.').isInt()

  // Se houver erros envia os dados da variavel "errors" para variavel "validacao" que eh passada para view form_add_noticia.
  var erros = req.validationErrors()
  if(erros){
    //res.render("unidades/formUnidade", {validacao : erros, unidade : unidade})
    res.render("unidades/editUnidade", {unidade : unidade, validacao : erros})
    return
  }

  // Carrega a funcao de conexao com bd exportada via autoload.
  var connection = app.config.dbConnection()
  // Carrega o model de unidades.
  var unidadesModel = new app.app.models.UnidadesDAO(connection)

  unidadesModel.atualizarUnidade(unidade, function(error, result){
    res.redirect('/unidades')
  })
}


module.exports.excluirUnidade = function(app, req, res){
  var unidade = req.query

  // Carrega a funcao de conexao com bd exportada via autoload.
  var connection = app.config.dbConnection()
  // Carrega o model de unidades.
  var unidadesModel = new app.app.models.UnidadesDAO(connection)

  unidadesModel.excluirUnidade(unidade, function(error, result) {
    res.redirect('/unidades')
  })
}
