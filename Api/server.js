const express = require('express')
require('dotenv').config()
const port=5000;
const app = express()
const RouterTicket = require("./routes/tickets")
const database = require("./config/db")
const errorMiddelware = require("./Middelware/errorMiddelware")

database()


app.use(express.json())
app.use(express.urlencoded({
    extended:false
}))

app.use("/api/tickets",RouterTicket)
app.use(errorMiddelware)

app.listen(port,()=> console.log(`Server Start in port ${port}`))