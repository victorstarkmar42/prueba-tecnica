const db = require('../models')
const Insured = db.insured

const createInsured = async(req,res) => {
    let payload = req.body
    try {
        const newinsured = await Insured.create(payload)
        res.status(201).send(newinsured)
    } catch (error) {
        res.status(500).send({message: error.message})
    }
}

const getInsured = async(req,res) => {
    try {
        const insured = await Insured.findOne({ where: { id: req.params.id } })
        if(insured != null) res.status(200).send({InsuredData:insured})
        res.status(404).send({message:'client not found'})
    } catch (error) {
        console.log(error.message)
    }
 }

 const getInsureds = async(req,res) =>{
    try {
        const insureds = await Insured.findAll({})
        if(!insureds) {res.status(404).send({message:'insureds not found'})}
        res.status(200).send(insureds)
    } catch (error) {
        console.log(error.message)
    }
 }

 const updateInsured = async(req,res) => {
    let payload = req.body
    try {
        const insuredUpdated = await Insured.update(payload,{ where: { id: req.params.id } })
        if(insuredUpdated != null) res.status(200).send({ data:insuredUpdated,message:'rows updated successfully'})
        res.status(404).send({message:'insured not found'})
    } catch (error) {
        console.log(error.message)
    }
}

const deleteInsured = async(req,res) => {
    try{
        const insuredDeleted = await Insured.destroy({ where: { id: req.params.id } })
        if(insuredDeleted != null) res.status(200).send({message:'insured deleted successfully',data:insuredDeleted})
        res.status(404).send({message:'insured not found'})
    }catch (eroor){

    }
}



module.exports = {
    createInsured,
    getInsured,
    getInsureds,
    updateInsured,
    deleteInsured
    
}