const User = require("../models/User");
const { createError } = require("../utils/error");
const createUser = async (req,res,next)=>{
    const newUser= new User(req.body)
    try{
        const savedUser = await newUser.save()
        res.status(200).json(savedUser)
    }catch(err){
       next(err)
    }
}

const updatedUser = async(req,res,next)=>{
    try{
        const updatedUser = await User.findByIdAndUpdate(req.params.id,
            {$set:req.body},
            {new :true})
        res.status(200).json(updatedUser)
    }catch(err){
       next(err)
    }
}


const deleteUser = async(req,res,next)=>{

    try{
        await User.findByIdAndRemove(req.params.id,)
        res.status(200).json("User deleted successfully")
    }catch(err){
       next(err)
    }
    
}

const getUser = async(req,res,next)=>{
    try{
        const getUser = await User.findById(req.params.id,)
         res.status(200).json(getUser)
     }catch(err){
        next(err)
     }
}

const getAllUser = async(req,res,next)=>{
    const failed = true;
    if(failed) return next(createError(401,"You are not authenticated!"));
    try{
        const getUsers = await User.find()
         res.status(200).json(getUsers)
     }catch(err){
         next(err)
     }
}

module.exports = {createUser,updatedUser,deleteUser,getUser,getAllUser}