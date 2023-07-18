const mongoose=require('mongoose');
mongoose.connect('mongodb+srv://ashiqdb:nrEy2RgchHnVWz05@mobiledb.uufeb6z.mongodb.net/?retryWrites=true&w=majority').then(()=>{
    console.log('connected');
}).catch((err)=>{
    console.log(err);
})