const express=require('express');

const {addUser,login,getfood}=require('../Controllers/crudApi');
const {addItem,deleteFoodItem}=require('../Controllers/foodApi');

const router=express.Router();

router.post('/addUser',addUser);

router.post('/login',login);

router.get('/getfood',getfood);

router.post('/addItem',addItem);

router.delete('/deleteItem',deleteFoodItem);

module.exports=router;