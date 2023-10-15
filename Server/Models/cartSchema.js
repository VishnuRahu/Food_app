const mongoose=require('mongoose')
const cartSchema=new mongoose.Schema({
    userId:{
        type:String,
        required:true
    },
    foods:[{
        cartId:{
            type:Number,
            required:true 
        },
        foodName:[String],
        rate:[Number],
        quantity:[Number]
    }]
})

module.exports=new mongoose.model('carts',cartSchema);