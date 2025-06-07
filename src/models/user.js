const mongoose=require('mongoose')

const userSchema= new mongoose.Schema({
    username :{
        type:String,
        unique:true,
        required:true,
        minlength:[4,"atleast 4 characters"]
    },

    email:{
           type:String,
        unique:true,
        required:true,
        minlength:[8,"atleast 8 characters"]
    },

   password:{
       type:String,
        unique:true,
        required:true,
        minlength:[4,"atleast 4 characters"]
   }

})
const user=mongoose.model('user',userSchema)

module.exports=user;

