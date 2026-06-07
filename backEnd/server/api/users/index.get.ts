import { userService } from "../../services";

export default defineAuthHandler(async (event) => {
  const users = await userService.getUsers();
  return { message: "get all users", users };
});
