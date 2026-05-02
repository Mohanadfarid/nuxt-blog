export default defineEventHandler(async (event) => {
  const postId = getRouterParam(event, "id");
  return { message: "dislike post by id : " + postId };
});
