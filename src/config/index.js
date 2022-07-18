require('dotenv').config()

const config = {
    application:{
        host: process.env.APP_HOST,
        port: process.env.APP_PORT,
    },
    database:{
        HOST: process.env.DB_HOST,
        USER: process.env.DB_USER,
        PASSWORD: process.env.DB_PASSWORD,
        DB: process.env.DB_NAME,
        dialect: 'mysql',
        pool: {
            max: 100,
            min: 0,
            acquire: 30000,
            idle: 10000
        }
    }
}


module.exports = config