//dependencies
import express from "express";
import {
  loginpageget,
  loginpagepost,
} from "../controllers/login_controllers.js";
const router = express.Router();

router.post("/", loginpagepost);

router.get("/", loginpageget);

export default router;
