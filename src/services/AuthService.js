const user=require('../models/user')
const { hashPassword } = require('../utils/hash');


const registerUser = async({username,email,password})=>{
const existingUser=await user.findOne({email})
if (existingUser) throw new Error('email already in use')

const hashed=await  hashPassword(password)
const newUser=new user({username,email,password:hashed})
await newUser.save()

return  { newUser, message:"user successesfully registerred"}
}

module.exports={registerUser};
