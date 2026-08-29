import { postService } from "~/backEnd/server/services/post.service";

export default defineAuthHandler(async (event) => {
  const postId = getRouterParam(event, "id");
  return { message: "get comments by post by id : " + postId};
});
