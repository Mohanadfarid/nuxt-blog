import { toUserResponseList } from "../../serializers";
import { userService } from "../../services";

export default defineAuthHandler(async (event) => {
  const users = await userService.getUsers();
  console.log(users)
  return { message: "get all users", users:toUserResponseList(users)};
});
