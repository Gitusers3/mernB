const express=require('express')
const mongoDbConnection=require('./db')
mongoDbConnection()
const app=express();
app.use(express.json())
app.use('/api/product',require('./Routes/productRoutes'));




app.get('/greetings',(req,res)=>{
    console.log("Hello, your first API has been called")
    res.send("This is your first API")
})
const port=4000;
app.listen(port,()=>{
    console.log('------------------------------------');
    console.log("App is listening on port "+port);
})