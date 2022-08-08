const Tickets = require("../models/ticketsModel")
const asyncHandelar = require("express-async-handler");

const getTickets = asyncHandelar(async (req,res)=>{
    const ticket = await Tickets.find()
    res.status(200).json(ticket)
})
    


const getTicket = asyncHandelar(async(req,res)=>{
    const ticket = await Tickets.findById(req.params.id)
    res.status(200).json(ticket)
})
    

const setTickets = asyncHandelar( async (req,res)=>{
    const ticket = await Tickets.create({
        header: req.body.header,
        date: req.body.date,
        getsOpen: req.body.getsOpen,
        stadium: req.body.stadium,
        team1: req.body.team1,
        team2: req.body.team2,
        price: req.body.price,
        color: req.body.color,
        round: req.body.round,
        maxTicket: req.body.maxTicket,
    })
    res.status(200).json(ticket)
    
})

const updateTickets = asyncHandelar( async (req,res)=>{
    const ticket = await Tickets.findById(req.params.id)
if(!ticket){
    res.status(500)
    throw new Error("Tickets Not Exist")
   }

   const updateTickets = await Tickets.findByIdAndUpdate(req.params.id,req.body,{
    new: true
   })
    res.status(200).json(updateTickets)
    
})


const delateTickets = asyncHandelar( async (req,res)=>{
    res.json({
        massege:"delete tickets",
      
    })
    
})
module.exports={
    getTickets,
    getTicket,
    setTickets,
    updateTickets,
    delateTickets
}