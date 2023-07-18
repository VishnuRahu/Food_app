const mongoose=require('mongoose');
const foodSchema=new mongoose.Schema({
    
    food_id:{
        type:String,
        required:true
    },
    name:{
        type:String,
        required:true
    },
    category:{
       type:String,
       required:true
    },
    cost:{
        type: Number,
        required:true
    },
    stock_count:{
        type:String,
        require:true
    }
})
module.exports=new mongoose.model('foods',foodSchema);