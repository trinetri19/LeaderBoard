const express = require('express')
const app = express()
const mongoose = require('mongoose')
const cors = require('cors')
const userRoute = require('./routes/userRoutes')
const rewardRoute = require('./routes/rewardRoutes')
require('dotenv').config()
const PORT = process.env.PORT || 8080;
app.use(express.json())

app.use(cors({
  origin: ['http://localhost:5173',"https://leader-board-system-dyh1.onrender.com"],
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true
}));

main().then(()=>{
    console.log(`connection successful`)
}).catch((error)=>{
    console.log(`mongoose error ${error}`)
})

async function main(){
   await mongoose.connect(process.env.mongo_url)
}
    
app.use("/",userRoute);
app.use("/",rewardRoute);

app.listen( PORT ,()=>{
    console.log(`server is listening on port!`)
})