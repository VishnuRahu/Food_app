const express=require('express');

const {addUser,login,getfood}=require('../Controllers/crudApi');
const {fetchfood_category,addItem,deleteFoodItem,updateQty}=require('../Controllers/foodApi');

const {fetchuserCart,deletecart}=require('../Controllers/cartApi');

const router=express.Router();

router.post('/addUser',addUser);

router.post('/login',login);

router.get('/getfood',getfood);

router.get('/fetchfoodcategory',fetchfood_category);

router.post('/addItem',addItem);

router.delete('/deleteItem',deleteFoodItem);

router.post('/fetchuserCart',fetchuserCart);

router.patch('/updateqty',updateQty);

router.delete('/deleteusercart',deletecart);

module.exports=router;