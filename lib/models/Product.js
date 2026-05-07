

import mongoose from "mongoose";


const ProductSchema = new mongoose.Schema({
    title:{type:String, required:true},
    slug:{type:String, required:true, unique:true},
    description:{type:String, required:true},
    availableQty:{type:Number, required:true},
    images:[{type:String}],
    category:{type:String, required:true},
    size:{type:String},
    color:{type:String},
    price:{type:Number, required:true},

    userId: { type: String, required: true },
    products: [
        {
            productId: { type: String, required: true },
            quantity: { type: Number, default:1 },
        }
    ],
    address:{type:String, required:true},
    amount:{type:Number, required:true},
    status:{type:String, default:"pending"},

},{timeStamps:true});   //timestamps will automatically add createdAt and updatedAt fields to the schema

export default mongoose.models("Product",ProductSchema);