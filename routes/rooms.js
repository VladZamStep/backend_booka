import express from "express";
import { createRoom, deleteRoom, deleteRoomAvailability, getAllRooms, getRoom, updateRoom, updateRoomAvailability } from "../controllers/roomController.js";

const router = express.Router();

//Create
router.post('/:hotelid', createRoom)
//Update
router.put('/:id', updateRoom)
router.put('/availability/:id', updateRoomAvailability)
//Delete
router.delete('/:id', deleteRoom)
router.delete('/availability/:id', deleteRoomAvailability)
//Get
router.get('/:id', getRoom)
//Get All
router.get('/', getAllRooms)


export default router;