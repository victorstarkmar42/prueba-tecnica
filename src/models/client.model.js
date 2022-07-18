module.exports = (sequelize, Sequelize) =>{
    const client = sequelize.define('client',{
        id:{
            type: Sequelize.UUID,
            defaultValue: Sequelize.UUIDV4,
            primaryKey: true
        },
        complete_name:{ type: Sequelize.STRING},
        phone:{type: Sequelize.STRING},
        email:{type: Sequelize.STRING}
    })
    return client
}