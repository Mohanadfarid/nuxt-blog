import { storeFile } from "../helpers";
import { userRepository } from "../repositories";
import type { CreateUserDto, UpdateUserDto } from "../schemas";
import { mediaService } from "./media.service";

export const userService = {
  async createUser(data: CreateUserDto) {
    // to do check if the mail already exists then throw an erorr
    // to do hash the password before its too late :(
    // to do handle files

    const createdFile = await mediaService.createMedia(
      await storeFile(data.file),
    );

    const { file, ...restOfData } = data;
    const validData = { ...restOfData, imageUrl: createdFile.id };
    return userRepository.create(validData);
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
