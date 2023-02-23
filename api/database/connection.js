const mongoose = require ("mongoose")

require('dotenv').config()

mongoose.set('strictQuery', true)
mongoose.connect(process.env.MONGODB ,{
    useNewUrlParser: true, 
    useUnifiedTopology: true,
}).then(()=>{
    console.log(`connection is successful`);
}).catch((err)=>console.log(err));