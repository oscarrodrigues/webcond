module.exports = function(app) {

  app.get('/unidades', function(req, res){
    // Carrega a funcao de conexao com bd exportada via autoload.
    var connection = app.config.dbConnection()
    // Carrega o model de noticias.
    var unidadesModel = new app.app.models.UnidadesDAO(connection)

    unidadesModel.getUnidades(function(error, result){
        res.render('unidades/unidades', {unidades : result})
      })
    })


    app.get('/formUnidade', function(req, res){
      res.render('unidades/formUnidade')
    })


    app.post('/unidades/salvarUnidade', function(req, res){
      var unidade = req.body
      // Carrega a funcao de conexao com bd exportada via autoload.
      var connection = app.config.dbConnection()
      // Carrega o model de noticias.
      var unidadesModel = new app.app.models.UnidadesDAO(connection)

      unidadesModel.salvarUnidade(unidade, function(error, result){
        res.redirect('/unidades')
      })
    })
}
