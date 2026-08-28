import mongoose from "mongoose";

import { removeFile, storeFile } from "../helpers";
import { userRepository } from "../repositories";
import { mediaService } from "./media.service";
import { httpErrorFactory } from "../errors/httpErrorFactory";

import type { CreateUserDto, UpdateUserDto } from "../schemas";

export const userService = {
  async createUser(data: CreateUserDto) {
    const emailExist = await userRepository.findByEmail(data.email);

    if (emailExist) {
      throw httpErrorFactory.validation({ email: "email is alread used" });
    }

    const session = await mongoose.startSession();
    session.startTransaction();
    const storedFileMeta = await storeFile(data.file);

    try {
      const createdFile = await mediaService.createMedia([storedFileMeta], {
        session,
      });

      const { file, password, ...restOfData } = data;

      const hashedPassword = await hashPassword(password);

      const validData = {
        ...restOfData,
        password: hashedPassword,
        profileImage: createdFile[0]?.id,
      };

      const user = await userRepository.create(validData, { session });
      await session.commitTransaction();
      return user[0];
    } catch (error) {
      await session.abortTransaction();
      await removeFile(storedFileMeta.storedName);
      throw error;
    } finally {
      await session.endSession();
    }
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
