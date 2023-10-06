const mongoose=require('mongoose');
const mongoUrl="mongodb://localhost:27017/mernb"

const mongoDbConnection = async() =>{
    try{
        await mongoose.connect(mongoUrl);
        console.log("MongoDB connected successfully");
        console.log('------------------------------------');
    }
    catch(err){
        console.error(`Error connecting to MongoDB ${err}`);
    }
}
module.exports=mongoDbConnection