import mongoose from "mongoose";
import passwordComplexity from "joi-password-complexity";
import Joi from "joi";
import { Collection_Model } from "./collection_schema.js";

const USER_ACCOUNTS_SCHEMA = new mongoose.Schema(
  {
    firstname: {
      type: String,
      required: true,
    },
    lastname: {
      type: String,
      required: true,
    },
    username: {
      type: String,
    },
    bio: {
      type: String,
    },
    fblink: {
      type: String,
    },
    linkedinlink: {
      type: String,
    },
    twitterlink: {
      type: String,
    },
    walletaddress: {
      type: String,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    collection_list: {
      type: [mongoose.SchemaTypes.ObjectId],
      ref: Collection_Model,
    },
  },
  { collection: "useraccounts" }
);

export const USER_ACCOUNTS_MODEL = mongoose.model(
  "useraccounts",
  USER_ACCOUNTS_SCHEMA
);

export const validate = (data) => {
  console.log(`validate: ${JSON.stringify(data)}`);
  const Schema = Joi.object({
    fname: Joi.string().required().label("First Name"),
    lname: Joi.string().required().label("Last Name"),
    email: Joi.string().email().required().label("Email"),
    password: passwordComplexity().required().label("Password"),
  });
  return Schema.validate(data);
};
