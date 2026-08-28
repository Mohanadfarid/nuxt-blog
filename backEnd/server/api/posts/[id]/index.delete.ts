import { postService } from "~/backEnd/server/services/post.service";

export default defineAuthHandler(async (event) => {
  const postId = getRouterParam(event, "id");
  const res = await postService.deletePost(postId);
  return { message: "delete post by id : " + postId, res, success: true };
});
