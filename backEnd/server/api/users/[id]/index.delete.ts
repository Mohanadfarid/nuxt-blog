export default defineEventHandler(async (event) => {
  const userId = getRouterParam(event, "id");
  return { message: "delete user by id : " + userId };
});
