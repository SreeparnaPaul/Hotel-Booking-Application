const express = require("express");
const Hotel = require("../models/Hotel");
const { createError } = require("../utils/error");
const router = express.Router();

//Create
router.post("/",async(req,res)=>{
    const newHotel= new Hotel(req.body)
    try{
        const savedHotel = await newHotel.save()
        res.status(200).json(savedHotel)
    }catch(err){
        res.status(500).json(err)
    }
    
})

//Update
router.put("/:id",async(req,res)=>{

    try{
        const updatedHotel = await Hotel.findByIdAndUpdate(req.params.id,
            {$set:req.body},
            {new :true})
        res.status(200).json(updatedHotel)
    }catch(err){
        res.status(500).json(err)
    }
    
})

//Delete
router.delete("/:id",async(req,res)=>{

    try{
        await Hotel.findByIdAndRemove(req.params.id,)
        res.status(200).json("Hotel deleted successfully")
    }catch(err){
        res.status(500).json(err)
    }
    
})

//Get

router.get("/:id",async(req,res)=>{

    try{
       const getHotel = await Hotel.findById(req.params.id,)
        res.status(200).json(getHotel)
    }catch(err){
        res.status(500).json(err)
    }
    
})

//Get All
router.get("/",async(req,res,next)=>{
   const failed = true;
   if(failed) return next(createError(401,"You are not authenticated!"));
    
    try{
       const getHotels = await Hotel.find()
        res.status(200).json(getHotels)
    }catch(err){
        next(err)
    }
    
})

module.exports=router
