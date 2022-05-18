import express from "express";
import {
  profilepageget,
  profilepagepost,
  getprofileinfo,
  uploadlogocontroller,
  uploadbannercontroller,
  retrieveprofilelogocontroller,
  retrieveprofilehbannercontroller,
} from "../controllers/profile_controller.js";

import uploads from "../middleware/uploads.js";

const router = express.Router();

router.get("/", profilepageget);
router.post("/", profilepagepost);

// create a middleware function here
//  and store the profileimages_uploads and the delete function

router.post("/getuserinfo", getprofileinfo);

//uses uploads middleware passed with bucketname parameter to catch file passed from frontend with fieldname of "logoimage"
router.post(
  "/uploadlogo",
  uploads("logoimagesbucket").fields([{ name: `logoimage` }]),
  uploadlogocontroller
);

//called frpm the api with url of /profile/retrievelogo
//this is called everytime the /profile page is up in the frontend
router.post("/retrievelogo", retrieveprofilelogocontroller);

//uses uploads middleware passed with bucketname parameter to catch file passed from frontend with fieldname of "bannerimage"
router.post(
  "/uploadbanner",
  uploads("bannerimagesbucket").fields([{ name: `bannerimage` }]),
  uploadbannercontroller
);
//called frpm the api with url of /profile/retrievebanner
//this is called everytime the /profile page is up in the frontend
router.post("/retrievebanner", retrieveprofilehbannercontroller);

export default router;
