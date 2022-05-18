//dependencies
import { Collection_Model } from "../models/collection_schema.js";
import { USER_ACCOUNTS_MODEL } from "../models/user_accounts_schema.js";
import jwt from "jsonwebtoken";

//function for createcollection post
export const createcollectionpost = async (req, res) => {
  try {
    const user = req.cookies.token;
    console.log(`user token: ${user}`);

    if (!user)
      return res.status(500).send({ message: "Internal Server Error" });

    const data = jwt.decode(user);
    console.log(data);

    //check if collection name is already existing

    console.log(req.files);

    if (req.body.blockchain === "Blockchain") {
      res.send(
        `Invalid Blockchain type, received a value of : ${req.body.blockchain}`
      );
      res.redirect("http://localhost:5000/publish");
    }

    if (req.body.category === "Category") {
      res.send(
        `Invalid Category type, received a value of : ${req.body.category}`
      );
      res.redirect("http://localhost:5000/publish");
    }

    //create the collection
    const collection = await Collection_Model.create({
      owner: data.id,
      collection_name: req.body.name,
      description: req.body.description,
      blockchain: req.body.blockchain,
      category: req.body.category,
      collection_logo_id: req.files.logo[0].id,
      collection_banner_image: req.files.banner[0].id,
    });

    //get the collection id

    const collectionID = await Collection_Model.findOne({
      owner: data.id,
      collection_name: req.body.name,
    });

    //add collectionid to useraccounts collectionlist []

    const useraccount = await USER_ACCOUNTS_MODEL.updateOne(
      { _id: data.id },
      { $push: { collection_list: collectionID.id } }
    );

    res.redirect("http://localhost:3000/createcollection");
  } catch (error) {
    res.send(
      `An error occured: ${error} <br></br><br></br> Kindly go back and refresh the page <br></br> sorry for inconvinience`
    );
    res.redirect("http://localhost:5000/createcollection");
  }
};
export const createcollectionget = (req, res) => {
  res.send("createcollectionget");
};
