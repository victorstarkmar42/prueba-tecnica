const db = require('../models')
const Policy = db.policy

const createPolicy = async(req,res) => {
    let payload = req.body
    try {
        const newpolicy = await Policy.create(payload)
        res.status(201).send(newpolicy)
    } catch (error) {
        res.status(500).send({message: error.message})
    }
}

const getPolicy = async(req,res) => {
    try {
        const policy = await Policy.findOne({ where: { id: req.params.id } })
        if(policy != null) res.status(200).send({PolicyData:policy})
        res.status(404).send({message:'policy not found'})
    } catch (error) {
        console.log(error.message)
    }
 }

 const getPolicies = async(req,res) =>{
    try {
        const policies = await Policy.findAll({})
        if(!policies) {res.status(404).send({message:'policies not found'})}
        res.status(200).send(policies)
    } catch (error) {
        console.log(error.message)
    }
 }

 const updatePolicy = async(req,res) => {
    let payload = req.body
    try {
        const policyUpdated = await Policy.update(payload,{ where: { id: req.params.id } })
        if(policyUpdated != null) res.status(200).send({ data:policyUpdated,message:'rows updated successfully'})
        res.status(404).send({message:'policy not found'})
    } catch (error) {
        console.log(error.message)
    }
}

const deletePolicy = async(req,res) => {
    try{
        const policyDeleted = await Policy.destroy({ where: { id: req.params.id } })
        if(policyDeleted != null) res.status(200).send({message:'policy deleted successfully',data:policyDeleted})
        res.status(404).send({message:'policy not found'})
    }catch (eroor){

    }
}


module.exports = {
    createPolicy,
    getPolicy,
    getPolicies,
    updatePolicy,
    deletePolicy
}