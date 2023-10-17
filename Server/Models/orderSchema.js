const mongoose=require('mongoose');

const orderSchema=new mongoose.Schema({
    
    userId:{
        type:String,
        required:true
    },
    foodsOrdered:[{
        orderId:{
            type: String,
            required:true 
        },
        foodName:[String],
        rate:[Number],
        quantity:[Number],
        payment:{
            type:String,
            default:"pending"
        },
        totalAmount:{
            type: Number,
            required:true
        }
    }],
    
})

module.exports= new mongoose.model('orders',orderSchema);