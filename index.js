const express = require("express")
const dotenv = require("dotenv")
const mongoose = require("mongoose")
require('./database/connection.js')
const app = express()

dotenv.config()

app.listen(8800, ()=>{
    console.log("Connected to backend");
})