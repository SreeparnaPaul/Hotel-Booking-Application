const express = require("express")
const dotenv = require("dotenv")
const mongoose = require("mongoose")
const authRoute= require("./routes/auth.js")
const usersRoute= require("./routes/users.js")
const hotelsRoute= require("./routes/hotels.js")
const roomsRoute= require("./routes/rooms.js")
const cookieParser= require("cookie-parser")
const cors = require("cors")
require('./database/connection.js')
const app = express()

dotenv.config()
// app.get("/users",(req,res)=>{
//     res.send("hello first request!")
// })

//middlewares
app.use(cookieParser())
app.use(cors())
app.use(express.json())

app.use("/api/auth",authRoute)
app.use("/api/users",usersRoute)
app.use("/api/hotels",hotelsRoute)
app.use("/api/rooms",roomsRoute)

app.use((err,req,res,next)=>{
    const errorStatus = err.status || 500
    const errorMessage = err.message || "Something went wrong"
    return res.status(errorStatus).json({
        success:false,
        status:errorStatus,
        message: errorMessage,
        stack : err.stack,
    })
})

app.listen(8800, ()=>{
    console.log("Connected to backend");
})