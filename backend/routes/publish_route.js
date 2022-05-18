import express from "express";
import {
  publishget,
  publishpost,
  getcollectionlistget,
  getcollectionlist,
} from "../controllers/publish_controller.js";

import uploads from "../middleware/uploads.js";

const router = express.Router();

router.get("/", publishget);

//uses upload middleware passed with bucketname parameter to catch files passed from the frontend with field name of "nftfile"
router.post(
  "/",
  uploads("nftuploads").fields([{ name: "nftfile" }]),
  publishpost
);
router.get("/getcollectionlist", getcollectionlistget);

//called everytime the /publish page is up in the frontend
router.post("/getcollectionlist", getcollectionlist);

export default router;
