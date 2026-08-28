import mongoose from "mongoose";
import { postRepository } from "../repositories/post.repository";
import type { CreatePostDto } from "../schemas";
import { removeFile, storeFile } from "../helpers";
import { mediaService } from "./media.service";
import { httpErrorFactory } from "../errors/httpErrorFactory";

export const postService = {
  async createPost(data: CreatePostDto, authSession: any) {
    const session = await mongoose.startSession();
    session.startTransaction();
    const storedFilesMeta = data.postAttachments
      ? await Promise.all(data.postAttachments.map((file) => storeFile(file)))
      : [];

    console.log("storedFilesMeta", storedFilesMeta);
    try {
      const createdFiles = await mediaService.createMedia(storedFilesMeta, {
        session,
        ordered: true,
      });

      console.log(authSession.user, "user");

      const validData = {
        ...data,
        author: authSession.user.id,
        likes: 0,
        likers: [],
        comments: [],
        postAttachments: createdFiles?.map((file) => file.id),
      };

      const post = await postRepository.create(validData, { session });
      await session.commitTransaction();
      return post[0];
    } catch (error) {
      await session.abortTransaction();
      await Promise.all(
        storedFilesMeta.map((file) => removeFile(file.storedName)),
      );
      throw error;
    } finally {
      await session.endSession();
    }
  },

  async getPosts() {
    return await postRepository.findAll();
  },

  async likePost(postId: string, user: any) {
    const post = await postRepository.findById(postId);

    if (!post) throw httpErrorFactory.notFound("Post not found");

    const alreadyLiked = post.likers.some(
      (liker) => liker._id.toString() === user.id,
    );
    if (alreadyLiked) throw httpErrorFactory.conflict("Post already liked");

    post.likes += 1;
    post.likers.push(user.id);
    await post.save();
    // console.log(post, "post");
    return post;
  },

  async dislikePost(postId: string, user: any) {
    const post = await postRepository.findById(postId);

    if (!post) throw httpErrorFactory.notFound("Post not found");

    const alreadyLiked = post.likers.some(
      (liker) => liker._id.toString() === user.id,
    );

    if (!alreadyLiked)
      throw httpErrorFactory.conflict("You have not liked this post");

    post.likes -= 1;
    post.likers = post.likers.filter(
      (liker) => liker._id.toString() !== user.id,
    );
    await post.save();
    // console.log(post, "post");
    return post;
  },

  async getPostById(postId: string) {
    const post = await postRepository.findById(postId);
    console.log(post, "post returned from resoposatory");
    if (!post) throw httpErrorFactory.notFound("Post not found");
    return post;
  },

  async deletePost(postId: string) {
    const post = await postRepository.deleteById(postId);
    return post;
  },

  async updatePost(postId: string, data: any) {
    const post = await postRepository.updateOne(postId, data);
    return post;
  },
};
