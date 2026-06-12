import { userService } from "~/backEnd/server/services";

export default defineAuthHandler(async (event) => {
  const userId = getRouterParam(event, "id");
  const user = await userService.getUserById(userId);
  return { message: "get single user by id : ", user: user?.toJSON() };
});
