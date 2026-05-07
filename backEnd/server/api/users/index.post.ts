import { createUserSchema, type CreateUserDto } from "../../schemas";
import { userService } from "../../services";
import { validate } from "../../utils/validate";

export default defineEventHandler(async (event) => {
  const body = await readBody(event);

  const validData = validate<CreateUserDto>(createUserSchema, body, event);

  const user = await userService.createUser(validData)
  
  return { message: "post create user", user };
});
