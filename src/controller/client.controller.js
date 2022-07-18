const { client } = require('../models')
const db = require('../models')
const Client = db.client

const createClient = async(req,res) => {
    let payload = req.body
    try {
        const newclient = await Client.create(payload)
        res.status(201).send(newclient)
    } catch (error) {
        res.status(500).send({message: error.message})
    }
}

const getClient = async(req,res) => {
    try {
        const client = await Client.findOne({ where: { id: req.params.id } })
        if(client != null) res.status(200).send({ClientData:client})
        res.status(404).send({message:'client not found'})
    } catch (error) {
        console.log(error.message)
    }
 }

 const getClients = async(req,res) =>{
    try {
        const clients = await Client.findAll({})
        if(!clients) {res.status(404).send({message:'clients not found'})}
        res.status(200).send(clients)
    } catch (error) {
        console.log(error.message)
    }
 }

 const updateClient = async(req,res) => {
    let payload = req.body
    try {
        const clientUpdated = await Client.update(payload,{ where: { id: req.params.id } })
        if(!clientUpdated) {res.status(404).send({message:'client not found'})}
        res.status(200).send({message:'client updated',clientUpdated})
    } catch (error) {
        console.log(error.message)
    }
}


const deleteClient = async(req,res) => {
    try{
        const clientDeleted = await Client.destroy({ where: { id: req.params.id } })
        if(clientDeleted != null) res.status(200).send({message:'client deleted successfully',data:clientDeleted})
        res.status(404).send({message:'cliente not found'})
    }catch (error){
        console.log(error)
    }
}



module.exports = {
    createClient,
    getClient,
    updateClient,
    deleteClient,
    getClients
    
}