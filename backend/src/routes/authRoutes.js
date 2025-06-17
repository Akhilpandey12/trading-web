const express=require('express')
const router=express.Router();
const {aunthenticates} =require('../middleware/routeProtecter')
const User =require('../models/user')
const {register,login,me,logout} =require('../controllers/authController')
const {validator,loginValidator} =require('../middleware/authMiddleware')

router.post('/register',validator ,register)
router.post('/login',loginValidator,login)
router.get('/me' ,aunthenticates, me)
router.post('/logout',logout)
module.exports=router