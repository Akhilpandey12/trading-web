
const { validationResult } = require('express-validator');
const { registerUser, loginUser } = require('../services/AuthService')


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
        const {token ,username,userId}= await loginUser(req.body)

     
       
    res.cookie('token',token)
     res.send("logged in",username,userId)
    }
    catch (error) {
        res.status(400).json({ error:error.message})
    }


}
module.exports = { register, login }