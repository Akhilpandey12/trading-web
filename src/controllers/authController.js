
const { validationResult } = require('express-validator');
const {registerUser} =require('../services/AuthService')

const register =async (req,res)=>{

    const errors=validationResult(req)
   if(!errors.isEmpty()){
   return  res.status(400).json({
        errors:errors.array(),
        message:"incorrect data"
   })
   }
   try{
    const response= await registerUser(req.body)
    res.status(200).json(response)
   }
   catch(error){res.status(400).json({error:error.message})}

}

module.exports={register}