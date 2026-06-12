import { httpErrorFactory } from "../errors/httpErrorFactory";
import { userRepository } from "../repositories";
import type { CreateUserDto, LoginUserDto } from "../schemas";
import { userService } from "./user.service";
import type { H3Event } from "h3";

export const authService = {
  async loginUser(data: LoginUserDto, event: H3Event) {
    const user = await userRepository.findByEmail(data.email);
    if (!user) throw httpErrorFactory.auth();

    const passwordValid = await verifyPassword(user.password, data.password);
    if (!passwordValid) throw httpErrorFactory.auth();


    await setUserSession(event, {
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        profileImage: user?.profileImage?.path,
      },
    });

    return user;
  },

  async logoutUser(event: H3Event) {
    const result = await clearUserSession(event);
    return result;
  },

  async registerUser(data: CreateUserDto) {
    const user = await userService.createUser(data);
    // to do handle logging in
    return user;
  },
};
