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
    foods_ordered:{
        food_id:{
            type: array,
        },
        quanity:{
            type:array,
        }
    },
    total_amount:{
        type: Number,
        required:true
    },
    payment_stauts:{
        type:String,
        require:true
    }
})
module.exports=new mongoose.model('orders',orderSchema);