const mongoose = require('mongoose');
const { Schema }=mongoose;
const ProductSchema = new Schema({
    name:{
        type:String,
        required:true
    },
    description:{
        type: String,
        required:true
    },
    price:{
        type : Number,
        required: true
    },
    quantity:{
        type:Number,
        required:true
    },
    total:{
        type:Number,
        required:true
    },
    date:{
        type:Date,  
        default: Date.now()
    }
})
module.exports = mongoose.model('product',ProductSchema);