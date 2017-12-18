module.exports = function(app) {

  app.get('/unidades', function(req, res){
    app.app.controllers.unidades.unidades(app, req, res)
  })

  app.get('/formUnidade', function(req, res){
    app.app.controllers.unidades.formUnidade(app, req, res)
  })

  app.post('/unidades/salvarUnidade', function(req, res){
    app.app.controllers.unidades.salvarUnidade(app, req, res)
  })

  app.post('/unidades/pesquisarUnidade', function(req, res) {
    app.app.controllers.unidades.pesquisarUnidade(app, req, res)
  })

  app.get('/unidades/editarUnidade', function(req, res) {
    app.app.controllers.unidades.editarUnidade(app, req, res)
  })

  app.post('/unidades/atualizarUnidade', function(req, res){
    app.app.controllers.unidades.atualizarUnidade(app, req, res)
  })

  app.get('/unidades/excluirUnidade', function(req, res){
    app.app.controllers.unidades.excluirUnidade(app, req, res)
  })
}
