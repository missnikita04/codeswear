

import mongoose from "mongoose";


const OrderSchema = new mongoose.Schema({
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

export default mongoose.models("Order",OrderSchema);