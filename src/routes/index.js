const {Router} = require('express')
const api = Router()


const apiClient = require('./client.route')
const authentication = require('./agent.route')
const apiInsured = require('./insured.route')
const apiPolicy = require('./policy.route')

api.use(authentication)
api.use(apiClient)
api.use(apiInsured)
api.use(apiPolicy)


module.exports = api