const express=require('express');

const {addUser,login,getfood}=require('../Controllers/crudApi');
const {fetchfood_category,addItem,deleteFoodItem}=require('../Controllers/foodApi');

const {fetchuserCart}=require('../Controllers/cartApi');

const router=express.Router();

router.post('/addUser',addUser);

router.post('/login',login);

router.get('/getfood',getfood);

router.get('/fetchfoodcategory',fetchfood_category);

router.post('/addItem',addItem);

router.delete('/deleteItem',deleteFoodItem);

router.get('/fetchuserCart',fetchuserCart);

module.exports=router;