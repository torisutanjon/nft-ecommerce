//dependencies

import mongoose from "mongoose";

const NFT_Schema = new mongoose.Schema(
  {
    creator: {
      type: mongoose.SchemaTypes.ObjectId,
      required: true,
    },
    nftname: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    nftcollection: {
      type: mongoose.SchemaTypes.ObjectId,
      required: true,
    },
    blockchain: {
      type: String,
      required: true,
    },
    nftfile_id: {
      type: mongoose.SchemaTypes.ObjectId,
      required: true,
    },
  },
  { collection: "publishednfts" }
);

export const NFT_MODEL = mongoose.model("publishednfts", NFT_Schema);
