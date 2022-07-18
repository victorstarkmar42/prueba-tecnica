require('dotenv').config()
const app = require('./app')
const database = require('./models')
const { application } = require('./config')


async function init ( application ) {
    try{
        await database.sequelize.sync()
        app.listen(application.port,()=>{
            console.log(`server running on http://${application.host}:${application.port}`)
        })
    }catch (err){
        console.log(err)
        process.exit(0)
    }
}

init(application)