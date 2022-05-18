//dependencies
import jwt from "jsonwebtoken";
import { USER_ACCOUNTS_MODEL } from "../models/user_accounts_schema.js";
import { Collection_Model } from "../models/collection_schema.js";
import { NFT_MODEL } from "../models/nft_schema.js";

export const publishget = (req, res) => {
  res.send("publishget");
};

//function for publish post
export const publishpost = async (req, res) => {
  try {
    //check if passed files is there as well as its information
    console.log(req.files);

    //get the passed token
    const token = req.cookies.token;
    //decode the token to view the data
    const data = jwt.decode(token);

    //check if the blockchain dropdown value has changed due to frontend design of the dropdown
    if (req.body.blockchain === "Blockchain") {
      res.send(
        `Invalid Blockchain type with a value of : ${req.body.blockchain}`
      );
      res.redirect("http://localhost:5000/publish");
    }
    //upload nft data to database
    const nft = await NFT_MODEL.create({
      creator: data.id,
      nftname: req.body.nftname,
      description: req.body.nftdescription,
      nftcollection: req.body.collection_id,
      blockchain: req.body.blockchain,
      nftfile_id: req.files.nftfile[0].id,
    });

    // get the nftfile id

    const nftfile = await NFT_MODEL.findOne({
      creator: data.id,
      nftname: req.body.nftname,
    });

    console.log(nftfile);

    //update the collection to store the nftid to it

    const updatecollection = await Collection_Model.updateOne(
      { _id: req.body.collection_id },
      { $push: { nft_list: nftfile._id } }
    );

    res.redirect("http://localhost:3000/publish");
  } catch (error) {
    res.send(
      `An Error Occured: ${error}<br></br><br></br>Kindly go back and retry the process<br></br>Sorry for inconvenience`
    );
    res.redirect("http://localhost:5000/publish");
  }
};

export const getcollectionlistget = (req, res) => {
  res.send("getcollectionlistget");
};

//this is being called everytime the /publish was accessed in the frontend
export const getcollectionlist = async (req, res) => {
  try {
    //get the token
    const token = req.body.token;
    //decode the token
    const data = jwt.decode(token);

    const collectionlist = [];

    //get the collectionlist which holds all collection ids from user based from the token
    const collectionid = await USER_ACCOUNTS_MODEL.findOne({
      _id: data.id,
    }).select("collection_list");

    //push the returned collectionid to the collection list array
    collectionlist.push(...collectionid.collection_list);

    //get the collection data based from the id in collection list array
    const collectiondata = await Collection_Model.find({
      _id: { $in: collectionlist },
    }).select("collection_name");

    //if not data found
    if (!collectiondata)
      return res.status(404).send({ message: "No data Found" });

    //create a datalist array for the collection data
    const datalist = [];

    //since the collection data is an object use map function to individually extract each data and store it to array to make it an array
    collectiondata.map((data) => {
      datalist.push(data);
    });

    //send data to frontend
    res.send({ datalist: datalist });
  } catch (error) {
    console.log(error);
  }
};
