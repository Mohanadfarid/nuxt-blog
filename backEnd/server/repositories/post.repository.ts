import { Post, type PostType } from "../models/post";
import type { CreateMediaDto } from "../types";
import type { AnyKeys, CreateOptions } from "mongoose";

export const postRepository = {
  async create(data: AnyKeys<PostType>, options?: any) {
    return await Post.create([data], options);
  },

  async findById(id: string) {
    return await Post.findById(id)
      .populate("likers")
      .populate("author")
      .populate("postAttachments");
  },

  async findAll() {
    return await Post.find()
      .populate("likers")
      .populate("author")
      // .populate("comments")
      .populate("postAttachments");
  },

  async deleteById(id: string) {
    return await Post.findByIdAndDelete(id);
  },

  
    async updateOne(id: string, data: any) {
      return await Post.findByIdAndUpdate(id, data, { returnDocument: "after" });
    },
};
