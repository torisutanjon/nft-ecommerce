//dependencies
import express from "express";
import {
  signuppageget,
  signuppagepost,
} from "../controllers/signup_controller.js";
//variables
const router = express.Router();
router.get("/", signuppageget);
router.post("/", signuppagepost);

export default router;
