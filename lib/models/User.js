

import mongoose from "mongoose";


const UserSchema = new mongoose.Schema({
    name:{type:String, required:true},
    email:{type:String, required:true, unique:true},
    password:{type:String, required:true},
   

},{timeStamps:true});   //timestamps will automatically add createdAt and updatedAt fields to the schema

export default mongoose.models("User",UserSchema);