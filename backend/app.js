const express = require("express")
const bodyParser = require('body-parser');
const Router=require('./route/index')
const app =express()
require('dotenv').config();
const cors =require('cors')
const port =process.env.PORT
const connect =require('./config/dbConnect')


app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/',Router)


app.listen(port,()=>{
    console.log("server running");
})