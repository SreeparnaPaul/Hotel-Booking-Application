const Hotel = require("../models/Hotel");
const { createError } = require("../utils/error");
const createHotel = async (req,res,next)=>{
    const newHotel= new Hotel(req.body)
    try{
        const savedHotel = await newHotel.save()
        res.status(200).json(savedHotel)
    }catch(err){
       next(err)
    }
}

const updatedHotel = async(req,res,next)=>{
    try{
        const updatedHotel = await Hotel.findByIdAndUpdate(req.params.id,
            {$set:req.body},
            {new :true})
        res.status(200).json(updatedHotel)
    }catch(err){
       next(err)
    }
}


const deleteHotel = async(req,res,next)=>{

    try{
        await Hotel.findByIdAndRemove(req.params.id,)
        res.status(200).json("Hotel deleted successfully")
    }catch(err){
       next(err)
    }
    
}

const getHotel = async(req,res,next)=>{
    try{
        const getHotel = await Hotel.findById(req.params.id,)
         res.status(200).json(getHotel)
     }catch(err){
        next(err)
     }
}

const getAllHotel = async(req,res,next)=>{
    const failed = true;
    if(failed) return next(createError(401,"You are not authenticated!"));
    try{
        const getHotels = await Hotel.find()
         res.status(200).json(getHotels)
     }catch(err){
         next(err)
     }
}

module.exports = {createHotel,updatedHotel,deleteHotel,getHotel,getAllHotel}