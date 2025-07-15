const express = require('express')
const app = express()
const mongoose = require('mongoose')
const cors = require('cors')
const userRoute = require('./routes/userRoutes')
const rewardRoute = require('./routes/rewardRoutes')
require('dotenv').config()

app.use(express.json())
app.use(cors())

main().then(()=>{
    console.log(`connection successful`)
}).catch((error)=>{
    console.log(`mongoose error ${error}`)
})

async function main(){
   await mongoose.connect(process.env.mongo_url)
}
    
app.use("/leader/",userRoute);
app.use("/leader/",rewardRoute);

app.listen(process.env.port,()=>{
    console.log(`server is listening on port!`)
})