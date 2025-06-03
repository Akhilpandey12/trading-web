import mongoose from "mongoose";

const transactionSchema = new mongoose.Schema({
    userId:{type:mongoose.Schema.Types.ObjectId,ref:'user'},
    type:{type:String,enum:['BUY',SELL],required:true},
    solAmount :{type:Number,required:true},
    priceAtTransection:{type:Number,required:true},
    tatalValue:{type:Number,required:true}

},{timestamps:true})

export default mongoose.model('Transaction',transactionSchema)