const database = require('../models')
const hashPassword = require('../utils/encrypt')
const generateToken = require('../utils/generateToken')
const bcrypt = require('bcryptjs')

const Agent = database.agent



const signUp = async(req, res) => {
    payload = req.body

    try{
        const agentCreated = await Agent.create({
            ...payload,
            password: hashPassword(payload.password,8)
        })
        res.status(201).send({message:'agent created successfully', agentCreated})
    }catch ( error) {
        res.status(500).send({message:error.message})
    }
}

const login = (req , res ) => {

    let payload = req.body

    Agent.findOne({ 
        where:{
            email: req.body.email
        }
    }).then (agent => {
        if(!agent){
            return res.status(404).send({message:"Agent not found"})
        }

        var passwordIsValid = bcrypt.compareSync(
            req.body.password,
            agent.password
        )

        if (!passwordIsValid) {
            return res.status(401).send({
              accessToken: null,
              message: "Invalid Password!"
            });
        }

        const token = generateToken(payload)

        res.status(200).send({
            email: agent.email,
            accessToken: token
        });
    })
}


module.exports = {
    signUp,
    login
}