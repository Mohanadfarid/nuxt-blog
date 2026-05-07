import { userRepository } from "../repositories";
import type { CreateUserDto, UpdateUserDto } from "../schemas";

export const userService = {
  async createUser(data: CreateUserDto) {
    // to do check if the mail already exists then throw an erorr
    // to do hash the password before its too late :(
    // to do handle files
    return userRepository.create(data);
  },

  getUserById(id: string) {
    return userRepository.findById(id);
  },

  getUsers() {
    return userRepository.findAll();
  },

  deleteUser(id: string) {
    return userRepository.findById(id);
  },

  updateUser(id: string, data: UpdateUserDto) {
    return userRepository.updateOne(id, data);
  },
};
