import express from "express"
import {verifyToken,verifyUser,verifyAdmin} from "../utils/verifyToken.js"

import {
  updateUser,
  deleteUser,
  getUser,
  getUsers,
} from "../controllers/user.js";

const router  = express.Router();

// router.get("/checkauthentication" , verifyToken, (req,res,next)=>{
//     res.send("hello user, you are logged in")
// })


//UPDATE
router.put("/:id", verifyUser, updateUser);

//DELETE
router.delete("/:id", verifyUser, deleteUser);

//GET
router.get("/:id", verifyUser, getUser);

//GET ALL
router.get("/", verifyAdmin, getUsers);



export default router
