const express=require('express');


const {addUser,login,summa}=require('../Controllers/crudApi');

const router=express.Router();

router.post('/addUser',addUser);

router.post('/login',login);

router.get('/getlo',summa);

module.exports=router;