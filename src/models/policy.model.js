module.exports = (sequelize, Sequelize) =>{
    const policy = sequelize.define('policy',{
        id:{
            type: Sequelize.UUID,
            defaultValue: Sequelize.UUIDV4,
            primaryKey: true
        },
        policy_num:{ type: Sequelize.INTEGER()},
        start_date_policy:{type: Sequelize.DATE},
        effective_date_policy:{type:Sequelize.DATE},
        cliente_contracted_policy:{type:Sequelize.STRING},
        insured_persons:{type:Sequelize.STRING},
        insurance_carrier:{type:Sequelize.STRING},
        type_policy:{type:Sequelize.STRING},
        price:{type:Sequelize.INTEGER()},
        start_policy:{type:Sequelize.STRING}
    })
    return policy
}