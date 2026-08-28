import { postService } from "~/backEnd/server/services/post.service";

export default defineAuthHandler(async (event) => {
  const postId = getRouterParam(event, "id");
  const { user } = await requireUserSession(event);
  const post =  await postService.dislikePost(postId, user);
  return { message: "dislike post by id : " + postId, post };
});
