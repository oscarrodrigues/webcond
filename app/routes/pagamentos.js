module.exports = function(app){
  app.get('/pagamentos', function(req, res){
    app.app.controllers.pagamentos.pagamentos(app, req, res)
  })

  app.get('/pagamentos/adicionarCicloPagamentos', function(req, res){
    app.app.controllers.pagamentos.adicionarCicloPagamentos(app, req, res)
  })

  app.post('/pagamentos/salvarCicloPagamentos', function(req, res){
    app.app.controllers.pagamentos.salvarCicloPagamentos(app, req, res)
  })

  app.post('/pagamentos/pesquisarCicloPagamentos', function(req, res) {
    app.app.controllers.pagamentos.pesquisarCicloPagamentos(app, req, res)
  })

  app.get('/pagamentos/editarCicloPagamentos', function(req, res) {
    app.app.controllers.pagamentos.editarCicloPagamentos(app, req, res)
  })

  app.post('/pagamentos/atualizarCicloPagamentos', function(req, res){
    app.app.controllers.pagamentos.atualizarCicloPagamentos(app, req, res)
  })

  app.get('/pagamentos/excluirCicloPagamentos', function(req, res){
    app.app.controllers.pagamentos.excluirCicloPagamentos(app, req, res)
  })
}
