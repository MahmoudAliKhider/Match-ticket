const express = require('express')
require('dotenv').config()
const port=5000;
const app = express()
const RouterTicket = require("./routes/tickets")
const RouterClient= require("./routes/clients")
const database = require("./config/db")
const errorMiddelware = require("./Middelware/errorMiddelware")

database()


app.use(express.json())
app.use(express.urlencoded({
    extended:false
}))

app.use("/api/tickets",RouterTicket)
app.use("/api/clients",RouterClient)

app.use(errorMiddelware)

app.listen(port,()=> console.log(`Server Start in port ${port}`))