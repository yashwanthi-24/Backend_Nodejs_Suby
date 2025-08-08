 //to import express after installing
 const express = require("express");
 const mongoose = require("mongoose");
 const dotEnv = require("dotenv")
 const vendorRoutes = require('./routes/vendorRoutes')
 //we are getting data for user converting into json using body-parser
 const bodyParser = require('body-parser')
 const firmRoutes = require('./routes/firmRoutes')
 const  productRoutes = require('./routes/productRoutes')
 const cors = require('cors')
const path = require('path')
 //what are ever importing the express will assign to app
 const app = express()
app.use(cors())
 const PORT = process.env.PORT || 4000;
 //to access .env file
 dotEnv.config();

 //to access the value in MONGO_URI
mongoose.connect(process.env.MONGO_URI) 
.then(()=>console.log("MongoDB connected successfully"))
.catch((error)=>console.log(error))

app.use(bodyParser.json());
//to create http we use middleware
app.use('/vendor',vendorRoutes);
app.use('/firm',firmRoutes);
app.use('/product',productRoutes)
app.use('/uploads',express.static('uploads'));
 //to start the server
 app.listen(PORT,()=>{
    console.log(`server started and runing at ${PORT}`);
 });

 //routing the path in browser
 app.use('/',(req,res)=>{
    res.send("welcome to suby")
 })