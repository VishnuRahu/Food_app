const foodSchema=require('../Models/foodShema')


const fetchfood_category=async(req,res)=>{
    try{
        const result=await schema.find({category:req.body.category});
        if(result.length==0){
            res.json({
                message:"Failed to fetch data",
            })
        }
        else{
            res.json({
                result
            })
        }
            
      
    }catch(e){
        console.log(e);
    }
}

const addItem=async(req,res)=>{
    try{
        console.log("inside")
        console.log(req)
        const result=await foodSchema.updateOne(
            {title: req.body.title}, 
            { $push :{ foods : { foodId: req.body.foodId, foodName:req.body.foodName,rate:req.body.rate,qty:req.body.qty} } }
        );
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

const deleteFoodItem=async(req,res)=>{
     try{
        const result=await foodSchema.updateOne(
            {title: req.body.title}, 
            { $pull :{ foods : { foodId: req.body.foodId} } }
        );
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

module.exports={addItem,deleteFoodItem}