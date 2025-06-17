
const { validationResult } = require('express-validator');
const { registerUser, loginUser } = require('../services/AuthService')
const User =require('../models/user')


// Register
const register = async (req, res) => {

    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        return res.status(400).json({
            errors: errors.array(),
            message: "incorrect data"
        })
    }
    try {
        const response = await registerUser(req.body)
        res.status(200).json(response)
    }
    catch (error) { res.status(400).json({ error: error.message }) }

}

//login 

const login = async (req, res) => {

    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        return res.status(400).json({
            error: errors.array(),
            message: "invailid data"
        })
    }

    try {
        const { token, username, userId } = await loginUser(req.body)



      res.cookie('token', token, {
    httpOnly: true,
    sameSite: 'Lax',
    secure: false, // true in production with HTTPS
    maxAge: 7 * 24 * 60 * 60 * 1000
  });

        res.send("logged in", username, userId)
    }
    catch (error) {
        res.status(400).json({ error: error.message })
    }
}


//user after login
const me =async (req,res)=>{
try{
const user= await User.findById(req.user.id).select('-password')
res.json(user)
}
catch(error){res.status(500).json("server error")}
}


// logout

const logout =(req,res)=>{
    res.clearCookie('token',{
        httpOnly:true,
        sameSite:'Lax',
        secure:false
    });
    res.json("logout successfully")
}
module.exports = { register, login ,me,logout}

