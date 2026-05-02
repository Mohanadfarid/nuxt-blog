export default defineEventHandler(async (event) => {
  const userId = getRouterParam(event, "id");
  return { message: "patch user by id : " + userId };
});
