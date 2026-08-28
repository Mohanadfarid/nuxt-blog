import { postService } from "~/backEnd/server/services/post.service";

export default defineEventHandler(async (event) => {
  const postId = getRouterParam(event, "id");
  const post = await postService.getPostById(postId);
  return { message: "get single post by id : " + postId, post: post.toJSON() };
});
