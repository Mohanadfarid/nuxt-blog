import { storeFile } from "../../helpers";
import { createUserSchema, type CreateUserDto } from "../../schemas";
import { userService } from "../../services";
import { mediaService } from "../../services/media.service";
import { validate } from "../../utils/validate";

export default defineAuthHandler(async (event) => {
  const body = await readFormData(event);
  const data = Object.fromEntries(body.entries());

  const validData = validate<CreateUserDto>(createUserSchema, data);

  const user = await userService.createUser(validData);

  return { message: "post create user", user };
});
