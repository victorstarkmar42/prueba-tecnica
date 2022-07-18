const { database } = require('../config')
const Sequelize = require('sequelize')
const sequelize = new Sequelize(
    database.DB,
    database.USER,
    database.PASSWORD,
    {
        host: database.HOST,
        dialect: database.dialect,
        operatorAliases: false,

        pool:{
            max: database.pool.max,
            min: database.pool.min,
            acquire: database.pool.acquire,
            idle: database.pool.idle
        }
    }
)

const db = {}

db.Sequelize = Sequelize
db.sequelize = sequelize

db.agent = require('./agent.model')(sequelize,Sequelize)
db.client = require('./client.model')(sequelize,Sequelize)
db.insured = require('./insured.model')(sequelize,Sequelize)
db.policy = require('./policy.model')(sequelize,Sequelize)

module.exports = db