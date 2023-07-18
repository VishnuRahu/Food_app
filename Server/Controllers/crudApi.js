const schema=require('../Models/userShema');
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
        console.log(email);
        console.log(req.body.password);
        const result=await schema.findOne({email:email});
        console.log(result);
        if(result && await bcrypt.compare(req.body.password,result.password) ){
            console.log("INSIDE LOGIN")
            const user={email:email,shopname:result.shopname};
            res.json({
                data:"successful"
            })
            
        }
        else{
            res.json({
                data:"false",
            })
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

module.exports={addUser,login,summa}
