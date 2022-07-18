module.exports = (sequelize, Sequelize) => {
    const agent = sequelize.define("agent",{
        id:{
            type: Sequelize.UUID,
            defaultValue: Sequelize.UUIDV4,
            primaryKey: true
        },
        complete_name: { type: Sequelize.STRING },
        email:{ type: Sequelize.STRING },
        password:{ type:Sequelize.STRING}
    })

    return agent
}