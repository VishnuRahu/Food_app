const express=require('express');

const {addUser,login,getfood}=require('../Controllers/crudApi');

const router=express.Router();

router.post('/addUser',addUser);

router.post('/login',login);

router.get('/getfood',getfood);

module.exports=router;