const mongoose=require('mongoose');
const orderSchema=new mongoose.Schema({
    
    order_id:{
        type:String,
        required:true
    },
    user_id:{
        type:String,
        required:true
    },
    foods_ordered:[{
        foodName:[String],
        quanity:[Number]
    }],
    total_amount:{
        type: Number,
        required:true
    },
    stauts:{
        type:String,
        require:true
    }
})
module.exports=new mongoose.model('orders',orderSchema);