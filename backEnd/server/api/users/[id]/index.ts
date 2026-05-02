export default defineEventHandler(async (event) => {
  const userId = getRouterParam(event, "id");
  return { message: "get single user by id : " + userId };
});
