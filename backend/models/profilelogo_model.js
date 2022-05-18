import mongoose from "mongoose";

const PROFILELOGO_SCHEMA = new mongoose.Schema({
  creator: {
    type: mongoose.SchemaTypes.ObjectId,
    required: true,
  },
  imageid: {
    type: mongoose.SchemaTypes.ObjectId,
    required: true,
  },
});

export const PROFILELOGO_MODEL = mongoose.model(
  "profilelogoimages",
  PROFILELOGO_SCHEMA
);
