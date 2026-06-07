import { userService } from "~/backEnd/server/services";

export default defineAuthHandler(async (event) => {
  const userId = getRouterParam(event, "id");
  const user = await userService.getUserById(userId);
  console.log(user?.toJSON());
  return { message: "get single user by id : ", user: user?.toJSON() };
});
