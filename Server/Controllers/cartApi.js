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

module.exports={fetchuserCart}