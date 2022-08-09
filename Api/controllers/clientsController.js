const asyncHandelar = require("express-async-handler");
const Client = require("../models/clientsModel")
const getClients = asyncHandelar(async (req,res)=>{
     const client = await Client.find()
     res.status(200).json(client)
 })

const getClient = asyncHandelar( async (req,res)=>{
    const clientOne = await Client.findById(req.params.id)
    res.status(200).json(clientOne)
 })
 const setClients = asyncHandelar(async(req,res)=>{
    const  AddClient = await Client.create({
        firstName:req.body.firstName,
        lastName: req.body.lastName,
        ticketId: req.body.ticketId,
        ticketNumber: req.body.ticketNumber
    })
    res.status(200).json(AddClient)
 })
 
const deleteClient = asyncHandelar(async (req,res)=>{
    const deleteClient = await Client.findById(req.params.id)
    if(!deleteClient){
        res.status(500)
        throw new Error("Tickets Not Exist")
    }else{
       await Client.remove()
        res.status(200).json({id:req.params.id,
            message:`Delete ${req.params.id}` ,})
    }
 })

module.exports={
    getClients,
    getClient,
    deleteClient,
    setClients
}