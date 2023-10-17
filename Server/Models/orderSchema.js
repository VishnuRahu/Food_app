const mongoose=require('mongoose');
const orderSchema=new mongoose.Schema({
    
    userId:{
        type:String,
        required:true
    },
    foodsOrdered:[{
        orderId:{
            type:Number,
            required:true 
        },
        foodName:[String],
        rate:[Number],
        quantity:[Number],
        payment:{
            type:String,
            required:true
        },
        totalAmount:{
            type: Number,
            required:true
        }
    }],
    
})
module.exports=new mongoose.model('orders',orderSchema);