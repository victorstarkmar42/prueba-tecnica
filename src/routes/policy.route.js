const {Router} = require('express')
const api = Router()
const controller = require('../controller/policy.controller')
const middleware = require('../middlewares/isAuthenticated')

api.post('/policy',middleware.isAuthenticated,controller.createPolicy)
api.get('/policy/:id',middleware.isAuthenticated,controller.getPolicy)
api.get('/policies',middleware.isAuthenticated,controller.getPolicies)
api.put('/policy/:id',middleware.isAuthenticated,controller.updatePolicy)
api.delete('/policy/:id',middleware.isAuthenticated,controller.deletePolicy)

module.exports = api