export default defineEventHandler(async (event) => {
  const postId = getRouterParam(event, "id");
  return { message: "patch post by id : " + postId };
});
