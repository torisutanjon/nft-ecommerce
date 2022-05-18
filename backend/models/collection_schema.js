import mongoose from "mongoose";
import { NFT_MODEL } from "./nft_schema.js";

const Collection_Schema = new mongoose.Schema(
  {
    owner: {
      type: mongoose.SchemaTypes.ObjectId,
      required: true,
    },
    collection_name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    blockchain: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    collection_logo_id: {
      type: mongoose.SchemaTypes.ObjectId,
      required: true,
    },
    collection_banner_image: {
      type: mongoose.SchemaTypes.ObjectId,
      required: true,
    },
    nft_list: {
      type: [mongoose.SchemaTypes.ObjectId],
      ref: NFT_MODEL,
    },
  },
  { collection: "usernftcollections" }
);

export const Collection_Model = mongoose.model(
  "collections",
  Collection_Schema
);
