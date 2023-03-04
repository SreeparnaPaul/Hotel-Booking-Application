const express = require("express");
const router = express.Router();
const { createUser,getAllUser,getUser,updatedUser,deleteUser } = require("../controller/user");

//Create
router.post("/",createUser)

//Update
router.put("/:id",updatedUser)

//Delete
router.delete("/:id",deleteUser)

//Get

router.get("/:id",getUser)

//Get All
router.get("/",getAllUser)



module.exports=router
