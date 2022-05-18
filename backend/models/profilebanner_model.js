import mongoose from "mongoose";

const PROFILEBANNER_SCHEMA = new mongoose.Schema({
  creator: {
    type: mongoose.SchemaTypes.ObjectId,
    required: true,
  },
  imageid: {
    type: mongoose.SchemaTypes.ObjectId,
    required: true,
  },
});

export const PROFILEBANNER_MODEL = mongoose.model(
  "profilebannerimages",
  PROFILEBANNER_SCHEMA
);
