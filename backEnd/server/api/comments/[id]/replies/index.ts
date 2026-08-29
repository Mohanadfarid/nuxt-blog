import { postService } from "~/backEnd/server/services/post.service";

export default defineAuthHandler(async (event) => {
  const commentId = getRouterParam(event, "id");
  return { message: "get replies for comment by id  : " + commentId};
});
