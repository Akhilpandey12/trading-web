const express=require('express')
const router=express.Router();

const {register,login} =require('../controllers/authController')
const {validator,loginValidator} =require('../middleware/authMiddleware')

router.post('/register',validator ,register)
router.post('/login',loginValidator,login)

module.exports=router