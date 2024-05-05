const express =require("express");
const router =express.Router();

const { homepage, signup, loginUser } =require('../controller/index.js')

router.post("/home",homepage)
router.post('/register',signup)
router.post('/login',loginUser)


module.exports=router