const express=require('express')
const router=express.Router();

const {register} =require('../controllers/authController')
const {validator} =require('../middleware/authMiddleware')

router.post('/register',validator ,register)

module.exports=router