import { createUserSchema, type CreateUserDto } from "../../schemas";
import { toUserResponse } from "../../serializers";
import { authService, userService } from "../../services";
import { validate } from "../../helpers/validate";

export default defineEventHandler(async (event) => {
  const body = await readFormData(event);
  const data = Object.fromEntries(body.entries());

  const validData = validate<CreateUserDto>(createUserSchema, data);
  
  const user = await authService.registerUser(validData);

  return { message: "regiser user", user:toUserResponse(user) };
});
