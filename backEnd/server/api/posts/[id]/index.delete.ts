export default defineEventHandler(async (event) => {
  const postId = getRouterParam(event, "id");
  return { message: "delete post by id : " + postId };
});
