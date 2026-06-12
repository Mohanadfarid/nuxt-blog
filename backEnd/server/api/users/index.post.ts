import { createUserSchema, type CreateUserDto } from "../../schemas";
import { userService } from "../../services";
import { validate } from "../../helpers/validate";
import { toUserResponse } from "../../serializers";

export default defineAuthHandler(async (event) => {
  const body = await readFormData(event);
  const data = Object.fromEntries(body.entries());

  const validData = validate<CreateUserDto>(createUserSchema, data);

  const user = await userService.createUser(validData);

  return { message: "post create user", user: toUserResponse(user) };
});
