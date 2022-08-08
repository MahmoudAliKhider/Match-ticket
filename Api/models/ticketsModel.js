
const mongoose = require("mongoose");
const ticketSchema = mongoose.Schema({
   header:{
    type:String,
    require:[true,"Yo Must Do this"]
   },
   data:{
    type:String,
    require:[true,"Yo Must Do data"]
   },
   getsOpen:{
    type:String,
    require:[true,"Yo Must Do getOPen"]
   },
   staduim:{
    type:String,
    require:[true,"Yo Must add Staduim"]
   },
   team1:{
    type:String,
    require:[true,"Yo Must add team1"]
   },
   team2:{
    type:String,
    require:[true,"Yo Must add team2"]
   },
   price:{
    type:Number,
    require:[true,"Yo Must add number"]
   },
   color:{
    type:String,
    require:[true,"Yo Must add color"]
   },
   round:{
    type:String,
    require:[true,"Yo Must add round"]
   },
   maxTicket:{
    type:String,
    require:[true,"Yo Must add maxTicket"]
   },
   currentTickets:{
    type:Number,
   //  require:true,
    default:0
   }
})
 module.exports=mongoose.model("Tickats",ticketSchema);