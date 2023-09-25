const mongoose=require('mongoose');
const foodSchema=new mongoose.Schema({
    title:{
       type:String,
       required:true
    },
    food:[{
        food_id:{
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
            type:String,
            require:true
        }
    }]
    
})
module.exports=new mongoose.model('foods',foodSchema);