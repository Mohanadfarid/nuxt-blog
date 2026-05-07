import { updateUserSchema, type UpdateUserDto } from "~/backEnd/server/schemas";
import { userService } from "~/backEnd/server/services";

export default defineEventHandler(async (event) => {
  const userId = getRouterParam(event, "id");
  const body = await readBody(event);
  const validData = validate<UpdateUserDto>(updateUserSchema, body, event);

  const updatedUser = await userService.updateUser(userId, validData);
  console.log(validData);
  return { message: "patch user by id : " + userId, updatedUser };
});
