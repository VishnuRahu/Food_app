const schema=require('../Models/userShema');
const food=require('../Models/foodShema');
const bcrypt=require('bcrypt');


const addUser=async(req,res)=>{
    try{
        const data=new schema(req.body);
        const user=await schema.findOne({email:req.body.email})
        if(!user){
            const result=await data.save();
            if(result=="null"){
                res.json({
                    status:"Failed",
                    message:"Not able to add User Detail"
                })
            }
            else{
                res.send("Registered Successfully!")
            }
        }
        else{
            res.send("Already registered")
        }
    }catch(e){
        console.log(e);
    }
}


const login=async(req,res)=>{
    try{
        const email=req.body.email;
        const result=await schema.findOne({email:email});
        if(result && await bcrypt.compare(req.body.password,result.password) ){
            console.log("INSIDE LOGIN")
            if(result.useracc=="admin"){
                res.send('admin')
            }
            else{
                res.send('Successfull');
            } 
        }
        else{
            res.send('Unsuccessfull')
        }    
    }
    catch(e){
        console.log(e);
    }
}

const summa=async(req,res)=>{
    try{
       res.json({
        data:"message"
       })
    }
    catch(err){
      console.log(err);
    }
}

const getfood=async(req,res)=>{
    try{
        const result=await food.find();
        if(result ) {
          res.json({
            data:result,
          });
            
        }
        else{
            res.send('Unsuccessfull')
        }    
    }
    catch(e){
        console.log(e);
    }
}

module.exports={addUser,login,getfood}
