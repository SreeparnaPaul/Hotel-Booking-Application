const express = require("express");
const { createHotel,getAllHotel,getHotel,updatedHotel,deleteHotel, countByCity } = require("../controller/hotel");
const verifyAdmin = require("../utils/verifyToken");
const router = express.Router();

//Create
router.post("/",verifyAdmin,createHotel)

//Update
router.put("/:id",verifyAdmin,updatedHotel)

//Delete
router.delete("/:id",verifyAdmin ,deleteHotel)

//Get

router.get("/find/:id",getHotel)

//Get All
router.get("/",getAllHotel)
router.get("/countByCity",countByCity)
router.get("/countByType",getAllHotel)

module.exports=router
