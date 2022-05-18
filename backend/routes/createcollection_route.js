import express from "express";
import { createcollectionpost } from "../controllers/createcollection_controller.js";
import uploads from "../middleware/uploads.js";

const router = express.Router();

//uses the uploads middleware to catch files passed from the frontend with a field name of "logo" and "banner"
router.post(
  "/",
  uploads("usercollectionuploads").fields([
    { name: "logo" },
    { name: "banner" },
  ]),
  createcollectionpost
);

router.get("/", (req, res) => {
  res.send("createcollectionget");
});

export default router;
