//dependencies
import jwt from "jsonwebtoken";
import { USER_ACCOUNTS_MODEL } from "../models/user_accounts_schema.js";
import { PROFILELOGO_MODEL } from "../models/profilelogo_model.js";
import { PROFILEBANNER_MODEL } from "../models/profilebanner_model.js";
import dotenv from "dotenv";
import mongodb from "mongodb";
import { MongoClient } from "mongodb";

dotenv.config();

export const profilepageget = (req, res) => {
  res.send("profileget");
};

//update the user profile
export const profilepagepost = async (req, res) => {
  try {
    // console.log(req.body);
    const data = jwt.decode(req.body.token);
    // console.log(data);

    const user = await USER_ACCOUNTS_MODEL.findOne({ _id: data.id });
    //specify the fields to be updated along with the data
    (user.username = req.body.username),
      (user.bio = req.body.bio),
      (user.email = req.body.email),
      (user.fblink = req.body.fblink),
      (user.linkedinlink = req.body.linkedinlink),
      (user.twitterlink = req.body.twitterlink),
      (user.walletaddress = req.body.walletaddress);

    //update the user in the database
    await user.save();

    //reload the page in the frnntend
    res.redirect("http://localhost:3000/profile");
  } catch (error) {
    console.log(error);
    res.send(`error occured: ${error}`);
    res.redirect("http://localhost:5000/profile");
  }
};

//get called by the getuserprofileinfo_api from the frontend
//everytime /profile page was loaded
export const getprofileinfo = async (req, res) => {
  try {
    const token = req.body.token;
    if (!token) return res.send({ message: "No Token Found" });
    const data = jwt.decode(token);
    if (!data) return res.send({ message: "No User Found" });
    const user = await USER_ACCOUNTS_MODEL.findOne({ _id: data.id });
    res.send({ userdata: user });
  } catch (error) {
    res.send(`Some Error Occured: ${error}`);
    res.redirect("http://localhost:5000/profile");
  }
};

//upload profile logo function
export const uploadlogocontroller = async (req, res) => {
  try {
    // console.log(req.files);
    // console.log("ididididid");
    // console.log(req.files.logoimage[0].id);
    const token = req.cookies.token;
    // console.log(`token: ${token}`);
    const data = jwt.decode(token);
    // console.log(`data: ${data.id}`);

    //find the current current logo in the database
    const findlogo = await PROFILELOGO_MODEL.findOne({
      creator: data.id,
    });

    const client = new MongoClient(process.env.MONGO_DB_CONN_STRING);
    await client.connect();
    const db = client.db(process.env.DB_NAME);
    const bucket = new mongodb.GridFSBucket(db, {
      bucketName: "logoimagesbucket",
    });

    //delete the logo file and chunks in the logoimagesbucket
    if (!findlogo) {
      console.log("No Logo Found");
    } else {
      const _id = findlogo.imageid;
      bucket.delete(_id);
    }

    //delete the current logo from the profileslogo collection
    const deletelogo = await PROFILELOGO_MODEL.deleteMany({
      creator: data.id,
    });
    //after deletion create /save the new logo to the database
    //we do this to only save the updated logo to the database to conserve space
    const logo = await PROFILELOGO_MODEL.create({
      creator: data.id,
      imageid: req.files.logoimage[0].id,
    });
    res.redirect("http://localhost:3000/profile");
  } catch (error) {
    console.log(error);
  }
};

//retrieving of profile logo from the database if existing
//get called everytime the /profile page is called in the frontend
export const retrieveprofilelogocontroller = async (req, res) => {
  try {
    const data = jwt.decode(req.body.token);
    const logofile = await PROFILELOGO_MODEL.findOne({
      creator: data.id,
    });
    // console.log(logofile._id);
    if (!logofile) {
      console.log("No Logo Found");
    } else {
      //get logo file and chucks from the gridfsbucket
      const client = new MongoClient(process.env.MONGO_DB_CONN_STRING);
      await client.connect();
      const db = client.db(process.env.DB_NAME);
      const bucket = new mongodb.GridFSBucket(db, {
        bucketName: "logoimagesbucket",
      });
      const files = bucket.find({ _id: logofile.imageid });
      if (files) {
        console.log("logo found");
        files.forEach((file) => {
          console.log(file);
          console.log(file.filename);
          const rstream = bucket.openDownloadStreamByName(file.filename);

          var bufs = [];

          rstream
            .on("data", function (chunk) {
              bufs.push(chunk);
            })
            .on("end", function () {
              var fbuf = Buffer.concat(bufs);
              var base64 = fbuf.toString("base64");
              res.send({ logo: base64 });
            });
        });
      } else {
        console.log("logo not found");
      }
    }
  } catch (error) {
    console.log(error);
  }
};

//function of profile banner upload
export const uploadbannercontroller = async (req, res) => {
  try {
    // console.log(req.files);
    // console.log("ididididid");
    // console.log(req.files.bannerimage[0].id);
    const token = req.cookies.token;
    const data = jwt.decode(token);

    //find the current banner in the database
    const banners = await PROFILEBANNER_MODEL.findOne({
      creator: data.id,
    });

    //delete current banner file in the bucket
    const client = new MongoClient(process.env.MONGO_DB_CONN_STRING);
    await client.connect();
    const db = client.db(process.env.DB_NAME);
    const bucket = new mongodb.GridFSBucket(db, {
      bucketName: "bannerimagesbucket",
    });

    if (!banners) {
      console.log("No file found");
    } else {
      console.log(banners.imageid);
      const _id = banners.imageid;
      bucket.delete(_id);
    }

    //delete the current banner file in the profilebannerimages collection
    const deletebanner = await PROFILEBANNER_MODEL.deleteMany({
      creator: data.id,
    });

    //after deletion, create / save the new banner
    const banner = await PROFILEBANNER_MODEL.create({
      creator: data.id,
      imageid: req.files.bannerimage[0].id,
    });
    res.redirect("http://localhost:3000/profile");
  } catch (error) {
    console.log(error);
  }
};

//retrieve profile banner from the database
//gets called everytime the /profile page was called from the frontend
export const retrieveprofilehbannercontroller = async (req, res) => {
  try {
    const data = jwt.decode(req.body.token);
    const bannerfile = await PROFILEBANNER_MODEL.findOne({
      creator: data.id,
    });

    if (!bannerfile) {
      console.log("No Banner Found");
    } else {
      const client = new MongoClient(process.env.MONGO_DB_CONN_STRING);
      await client.connect();
      const db = client.db(process.env.DB_NAME);
      const bucket = new mongodb.GridFSBucket(db, {
        bucketName: "bannerimagesbucket",
      });
      const files = bucket.find({ _id: bannerfile.imageid });
      if (files) {
        console.log("banner found");
        files.forEach((file) => {
          console.log(file);
          console.log(file.filename);
          const rstream = bucket.openDownloadStreamByName(file.filename);

          var bufs = [];

          rstream
            .on("data", function (chunk) {
              bufs.push(chunk);
            })
            .on("end", function () {
              var fbuf = Buffer.concat(bufs);
              var base64 = fbuf.toString("base64");
              res.send({ banner: base64 });
            });
        });
      } else {
        console.log("banner not found");
      }
    }
  } catch (error) {
    console.log(error);
  }
};
