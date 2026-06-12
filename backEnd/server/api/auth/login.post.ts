import { validate } from "../../helpers";
import { loginUserSchema, type LoginUserDto } from "../../schemas";
import { toUserResponse } from "../../serializers";
import { authService } from "../../services";

export default defineEventHandler(async (event) => {
  const body = await readBody(event);

  const validData = validate<LoginUserDto>(loginUserSchema, body);


  const user = await authService.loginUser(validData, event);

  return { message: "nice user logged in", user:toUserResponse(user) };
});
