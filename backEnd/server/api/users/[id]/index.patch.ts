import { validate } from "~/backEnd/server/helpers";
import { updateUserSchema, type UpdateUserDto } from "~/backEnd/server/schemas";
import { userService } from "~/backEnd/server/services";

export default defineAuthHandler(async (event) => {
  const userId = getRouterParam(event, "id");
  const body = await readBody(event);
  const validData = validate<UpdateUserDto>(updateUserSchema, body);

  const updatedUser = await userService.updateUser(userId, validData);

  return { message: "patch user by id : " + userId, updatedUser };
});
