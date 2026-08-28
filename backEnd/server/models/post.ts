import { Schema, type InferSchemaType } from "mongoose";
import { defineMongooseModel } from "#nuxt/mongoose";

const postSchema = new Schema(
  {
    title: {
      type: String,
    },
    body: {
      type: String,
      required: true,
    },
    likes: {
      type: Number,
      min: 0,
      required: true,
    },
    likers: [
      {
        type: Schema.Types.ObjectId,
        ref: "User",
      },
    ],
    author: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    comments: [
      {
        type: Schema.Types.ObjectId,
        ref: "Comment",
      },
    ],
    postAttachments: [
      {
        type: Schema.Types.ObjectId,
        ref: "Media",
      },
    ],
  },
  {
    timestamps: true,
  },
);

export type PostType = InferSchemaType<typeof postSchema>;

export const Post = defineMongooseModel({
  name: "Post",
  schema: postSchema,
});
