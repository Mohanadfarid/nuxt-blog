export default defineEventHandler(async (event) => {
  const postId = getRouterParam(event, "id");
  return { message: "get single post by id : " + postId };
});
