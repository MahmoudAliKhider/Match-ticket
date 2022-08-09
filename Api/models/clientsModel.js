const mongoose = require("mongoose");
const clientSchema = mongoose.Schema({
firstName:{
    type:String,
    require:[true,"Enter Your FirstName"]
},
lastName:{
    type:String,
    require:[false,"Enter your Last name"]
},
ticketId:{
    type:String,
    require:true
},
ticketNumber:{
    type:Number,
    require:true
}


})
module.exports= mongoose.model("Clients",clientSchema)