const jwt =require('jsonwebtoken')

const aunthenticates =()=>{
const token = req.cookies.token;

if(!token) 
   {
    return res.status(400).json.("unautherised acces")
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