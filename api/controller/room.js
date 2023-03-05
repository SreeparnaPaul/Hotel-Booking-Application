const Room = require("../models/Room");
const Hotel = require("../models/Hotel");
const { createError } = require("../utils/error");

const createRoom = async(req,res,next)=>{

    const hotelId = req.params.hotelId;
    const newRoom = new Room(req.body);
    try {
        const savedRoom=await newRoom.save()
        try {
            await Hotel.findByIdAndUpdate(hotelId,{
                $push:{rooms:savedRoom._id}
            })
        } catch (err) {
            next(err)
        }
        res.status(201).json(savedRoom)
    } catch (err) {
        next(err)
    }

}

const updateRoom = async(req,res,next)=>{
    try{
        const updatedRoom = await Room.findByIdAndUpdate(req.params.id,
            {$set:req.body},
            {new :true})
        res.status(200).json(updatedRoom)
    }catch(err){
       next(err)
    }
}


const deleteRoom = async(req,res,next)=>{
    const hotelId = req.params.hotelId;
    try{
        await Room.findByIdAndRemove(req.params.id);
        try {
            await Hotel.findByIdAndUpdate(hotelId,{
                $pull:{rooms:req.params.id}
            })
        } catch (err) {
            next(err)
        }
        res.status(200).json("Room deleted successfully")
    }catch(err){
       next(err)
    }
    
}

const getRoom = async(req,res,next)=>{
    try{
        const getRoom = await Room.findById(req.params.id,)
         res.status(200).json(getRoom)
     }catch(err){
        next(err)
     }
}

const getAllRoom = async(req,res,next)=>{
   
    try{
        const getRooms = await Room.find()
         res.status(200).json(getRooms)
     }catch(err){
         next(err)
     }
}


module.exports={createRoom,updateRoom,deleteRoom,getAllRoom,getRoom}