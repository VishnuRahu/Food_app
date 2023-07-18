const mongoose=require('mongoose');
const bcrypt=require('bcrypt')
const userSchema=new mongoose.Schema({
    
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type: String,
        required:true
    },
    phoneNo:{
        type:Number,
        require:true
    }
})

userSchema.pre('save',function (next){
    if(this.isModified('password')){
        bcrypt.hash(this.password,0,(err, hash)=>{
            if(err){
                next(err)
            }
            else{
                this.password = hash;
                console.log('from schema encryption',hash)
                next();
            }
        })
    }  
})


module.exports=new mongoose.model('users',userSchema);