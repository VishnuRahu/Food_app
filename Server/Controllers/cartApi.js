const cartSchema=require('../Models/cartSchema')

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

module.exports={fetchuserCart,deletecart}