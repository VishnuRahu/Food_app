const mongoose=require('mongoose');
const foodSchema=new mongoose.Schema({
    title:{
       type:String,
       required:true
    },
    foods:[{
        foodId:{
            type:String,
            required:true
        },
        foodName:{
            type:String,
            required:true
        },
        rate:{
            type: Number,
            required:true
        },
        qty:{
            type:Number,
            require:true
        }
    }]
    
})
module.exports=new mongoose.model('foods',foodSchema);