import { Schema } from "mongoose";
import { defineMongooseModel } from "#nuxt/mongoose";

const mediaSchema = new Schema(
  {
    originalName: {
      type: String,
      required: true,
    },
    storedName: {
      type: String,
      unique: true,
      required: true,
    },
    path: {
      type: String,
      required: true,
    },
    extension: {
      type: String,
      required: true,
    },
    mimeType:{
      type: String,
      required: true,
    },
    size: {
      type: Number,
      min: 0,
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

export const Media = defineMongooseModel({
  name: "Media",
  schema: mediaSchema,
});
