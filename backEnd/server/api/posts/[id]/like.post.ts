export default defineEventHandler(async (event) => {
  const postId = getRouterParam(event, "id");
  return { message: "like post by id : " + postId };
});
