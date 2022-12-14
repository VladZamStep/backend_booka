import express from "express";
import { deleteUser, getAllUsers, getUser, updateUser } from "../controllers/userController.js";
const router = express.Router();

// router.get('/checkauth', verifyToken, (req, res, next) => {
//     res.send('Hello Friend!')
// })
// router.get('/checkuser/:id', verifyUser, (req, res, next) => {
//     res.send('Hello Friend, you can delete your account.')
// })
// router.get('/checkadmin/:id', verifyAdmin, (req, res, next) => {
//     res.send('Hello Admin!')
// })

//Update
router.put('/:id', updateUser)
//Delete
router.delete('/:id', deleteUser)
//Get
router.get('/:id', getUser)
//Get All
router.get('/', getAllUsers)

export default router;