const jwt =require('jsonwebtoken')
const User= require('../models/user')

const aunthenticates =(req,res,next)=>{
const token = req.cookies.token;
if(!token) 
   {
    return res.status(400).json("unauthorised acces")
   }
    try{
     const decode =jwt.verify(token,process.env.JWT_SECRET)
     req.user=decode;
     next();
    }
catch(error){
    return res.status(400).json("token expired")
}

}



// const isAdmin = async (req, res, next) => {
//   const user = await User.findById(req.user.id);
//   if (!user || user.role !== 'admin') {
//     return res.status(403).json({ error: 'Access denied: Admins only' });
//   }
//   next();
// };





module.exports={aunthenticates}