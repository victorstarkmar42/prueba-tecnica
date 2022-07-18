const {Router} = require('express')
const api = Router()
const controller = require('../controller/insured.controller')
const middleware = require('../middlewares/isAuthenticated')


api.post('/insured',middleware.isAuthenticated,controller.createInsured)
api.get('/insured/:id',middleware.isAuthenticated,controller.getInsured)
api.get('/insureds',middleware.isAuthenticated,controller.getInsureds)
api.put('/insured/:id',middleware.isAuthenticated,controller.updateInsured)
api.delete('/insured/:id',middleware.isAuthenticated,controller.deleteInsured)

module.exports = api