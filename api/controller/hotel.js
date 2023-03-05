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
   
    try{
        const getHotels = await Hotel.find()
         res.status(200).json(getHotels)
     }catch(err){
         next(err)
     }
}
const countByCity = async(req,res,next)=>{
    const cities=req.query.cities.split(",")
    try{
        const list =await Promise.all(cities.map(city=>{
            return Hotel.countDocuments({city:city})
        }))
         res.status(200).json(list)
     }catch(err){
         next(err)
     }
}

const countByType = async(req,res,next)=>{
    try{
    const hotelCount = await Hotel.countDocuments({type:"hotel"})
    const appartmentCount = await Hotel.countDocuments({type:"appartment"})
    const resortCount = await Hotel.countDocuments({type:"resort"})
    const villaCount = await Hotel.countDocuments({type:"villa"})
    const cabinCount = await Hotel.countDocuments({type:"cabin"})
    res.status(200).json([
        {type:"hotel",count:hotelCount},
        {type:"appartment",count:appartmentCount},
        {type:"resort",count:resortCount},
        {type:"villa",count:villaCount},
        {type:"cabin",count:cabinCount},
    ])
     }catch(err){
         next(err)
     }
}

module.exports = {createHotel,updatedHotel,deleteHotel,getHotel,getAllHotel,countByCity,countByType}