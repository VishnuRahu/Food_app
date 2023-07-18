const express=require('express');
const app=express();
const router=require('./Routes/crudRouters');
const cors=require('cors');

app.use(express.json());
app.use(cors({
    origin:"*"
}))

const port=process.env.port||8000;
require('./Connection/conn')


app.use(router);

app.listen(port,()=>{
    console.log('Connnected to the port');
})

