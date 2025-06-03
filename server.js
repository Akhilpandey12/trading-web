require('dotenv').config();
const mongoose = require('mongoose');
const app = require('./src/app');

function connectToDb (){
    mongoose.connect(process.env.MONGO_URI).then(()=>{
        console.log("connected to db")
    })
}
connectToDb();