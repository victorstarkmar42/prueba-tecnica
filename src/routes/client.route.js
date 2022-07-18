const {Router} = require('express')
const api = Router()
const controller = require('../controller/client.controller')
const middleware = require('../middlewares/isAuthenticated')

api.post('/client',middleware.isAuthenticated,controller.createClient)
api.get('/client/:id',middleware.isAuthenticated,controller.getClient)
api.get('/clients',middleware.isAuthenticated,controller.getClients)
api.put('/client/:id',middleware.isAuthenticated,controller.updateClient)
api.delete('/client/:id',middleware.isAuthenticated,controller.deleteClient)


module.exports = api