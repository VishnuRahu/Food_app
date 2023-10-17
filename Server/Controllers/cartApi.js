const cartSchema=require('../Models/cartSchema')
const orderSchema=require('../Models/orderSchema');

const fetchuserCart=async(req,res)=>{
    try{
        console.log('inside cart')
        console.log(req.body.userId)
        const result=await cartSchema.find({userId:req.body.userId})
        console.log(result)
        if(result){
            res.json({
               message:"Successful",
               data:result  
            })
        }
        else{
            res.json({
                message:"unsuccesfull",
            })
        }
    }
    catch(e){

    }
}

const adduserCart=async(req,res)=>{
    try{
        console.log(req.body.userId)
        const result=await cartSchema.updateOne({userId:req.body.userId},{$push:{ foods: {cartId:req.body.cartId,foodName:req.body.foodName,rate:req.body.rate,quantity:req.body.qty} }})
        console.log(result)
        if(result){
            res.json({
               message:"Successful",
               data:result  
            })
        }
        else{
            res.json({
                message:"unsuccesfull",
            })
        }
    }
    catch(e){

    }
}

const deletecart=async(req,res)=>{
    try{
        console.log(req.body.userId,req.body.cartId)
        const result=await cartSchema.updateOne(
            {userId:req.body.userId}, 
            { $pull :{ foods : { cartId: req.body.cartId} } }
        );
        console.log(result)
        if(result){
            res.json({
                message:"successfull"
            })
        }
        else{
            res.json({
                message:"unsuccessfull"
            })
        }
     }
     catch(e){
         console.log(e);
     }
}

const fetchuserorder=async(req,res)=>{
    try{
        console.log('inside order')
        console.log(req.body.userId)
        const result=await orderSchema.find({userId:req.body.userId})
        console.log(result)
        if(result){
            res.json({
               message:"Successful",
               data:result  
            })
        }
        else{
            res.json({
                message:"unsuccesfull",
            })
        }
    }
    catch(e){

    }
}


const fetchalluserorder=async(req,res)=>{
    try{
        console.log('inside fetch user');
        const result=await orderSchema.find({foodsOrdered:{$elemMatch:{payment:"pending"}}})
        console.log(result)
        if(result){
            res.json({
               message:"Successful",
               data:result  
            })
        }
        else{
            res.json({
                message:"unsuccesfull",
            })
        }
    }
    catch(e){

    }
}


module.exports={fetchuserCart,deletecart,fetchuserorder,adduserCart,fetchalluserorder}