const express = require("express");
const { createHotel,getAllHotel,getHotel,updatedHotel,deleteHotel } = require("../controller/hotel");
const router = express.Router();

//Create
router.post("/",createHotel)

//Update
router.put("/:id",updatedHotel)

//Delete
router.delete("/:id",deleteHotel)

//Get

router.get("/:id",getHotel)

//Get All
router.get("/",getAllHotel)

module.exports=router
