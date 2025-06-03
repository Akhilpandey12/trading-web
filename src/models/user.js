import mongoose, { Schema } from "mongoose";

const userSchema=new mongoose.Schema({
    username:{type:String ,required:true,unique:true},
    password:{type:String,required:true,unique:true},
    email:{type:String,required:true,unique:true},
    usdBalance:{type:Number,default:10000},
    solBalance:{type:Number,default:0},
},{timestamps:true});
export default mongoose.model('user', userSchema)