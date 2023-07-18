const schema=require('../Models/foodShema')


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