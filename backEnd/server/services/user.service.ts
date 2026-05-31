import { removeFile, storeFile } from "../helpers";
import { userRepository } from "../repositories";
import { mediaService } from "./media.service";
import type { CreateUserDto, UpdateUserDto } from "../schemas";
import type { H3Event } from "h3";
import mongoose from "mongoose";

import { ErrorTypes } from "../types";
import { httpErrorFactory } from "../errors/httpErrorFactory";

export const userService = {
  async createUser(event: H3Event, data: CreateUserDto) {
    // to do hash the password before its too late :(

    const emailExist = await userRepository.findByEmail(data.email);

    if (emailExist) {
      throw httpErrorFactory.validation({ email: "email is alread used" });
    }

    const session = await mongoose.startSession();
    session.startTransaction();
    const storedFileMeta = await storeFile(data.file);

    try {
      const createdFile = await mediaService.createMedia(storedFileMeta, {
        session,
      });

      const { file, ...restOfData } = data;
      const validData = { ...restOfData, imageUrl: createdFile.id };
      const user = await userRepository.create(validData, { session });
      await session.commitTransaction();
      console.log("transation compelete every thing is okay ");
      return user[0];
    } catch (error) {
      await session.abortTransaction();
      await removeFile(storedFileMeta.storedName);
      console.log(storedFileMeta.path);
      console.log("aborting transation u better handle the media delete");
      console.log(error.message);
      console.log(error.code);
      console.log(error);
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
