import { userService } from "../../services";

export default defineEventHandler(async (event) => {
  const users = await userService.getUsers();
  return { message: "get all users", users };
});
