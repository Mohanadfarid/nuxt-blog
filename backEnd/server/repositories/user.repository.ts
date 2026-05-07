import { User } from "../models/user";
import type { CreateUserDto, UpdateUserDto } from "../schemas";

export const userRepository = {
  async create(data: CreateUserDto) {
    return await User.create(data);
  },

  async findById(id: string) {
    return await User.findById(id);
  },

  async findAll() {
    return await User.find();
  },

  async deleteById(id: string) {
    return await User.findByIdAndDelete(id);
  },

  async updateOne(id: string, data: UpdateUserDto) {
    return await User.findByIdAndUpdate(id, data, { returnDocument: "after" });
  },
};
