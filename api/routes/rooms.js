const express = require("express");
const { createRoom, updateRoom, deleteRoom, getRoom, getAllRoom } = require("../controller/room");
const router = express.Router();
const verifyAdmin = require("../utils/verifyToken");


//Create
router.post("/:hotelId",verifyAdmin,createRoom)

//Update
router.put("/:id",verifyAdmin,updateRoom)

//Delete
router.delete("/:id/:hotelId",verifyAdmin ,deleteRoom)

//Get

router.get("/:id",getRoom)

//Get All
router.get("/",getAllRoom)

module.exports=router

