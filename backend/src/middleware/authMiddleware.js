const {body}=require('express-validator')

const validator=[
body('username').trim().notEmpty(),
body('password').trim().notEmpty().isLength({min:3}),
body('email').trim().notEmpty().isLength({min:10})

]

const loginValidator=[
body('username').trim().notEmpty(),
body('password').trim().notEmpty().isLength({min:4})

]

module.exports={validator,loginValidator}