module.exports = (sequelize, Sequelize) =>{
    const insured = sequelize.define('insured',{
        id:{
            type: Sequelize.UUID,
            defaultValue: Sequelize.UUIDV4,
            primaryKey: true
        },
        complete_name:{ type: Sequelize.STRING},
        age:{type: Sequelize.INTEGER()},
    })
    return insured
}