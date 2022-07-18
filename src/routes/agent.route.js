const { Router } = require('express')
const api = Router()
const controller = require('../controller/auth.controller')

api.post('/signup',controller.signUp)
api.post('/login', controller.login)

module.exports = api