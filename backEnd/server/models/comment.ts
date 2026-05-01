import { Schema } from "mongoose";
import { defineMongooseModel } from "#nuxt/mongoose";

const commentSchema = new Schema(
  {
    post: {
      type: Schema.Types.ObjectId,
      ref: "Post",
      required: true,
    },
    parentComment: {
      type: Schema.Types.ObjectId,
      ref: "Comment",
      default: null,
    },
    author: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    commentBody: {
      type: String,
      required: true,
    },
    commentAttachment: {
      type: String,
    },
  },
  {},
);

export const Comment = defineMongooseModel({
  name: "Comment",
  schema: commentSchema,
});
