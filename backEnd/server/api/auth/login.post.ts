import { loginUserSchema, type LoginUserDto } from "../../schemas";
import { authService } from "../../services";

export default defineEventHandler(async (event) => {
  const body = await readBody(event);

  const validData = validate<LoginUserDto>(loginUserSchema, body);
  console.log(validData);

  const user = await authService.loginUser(validData, event);

  return { message: "nice user logged in", user };
});
