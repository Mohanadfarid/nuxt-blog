import { User } from "../models/user";
import type { CreateUserData, UpdateUserDto } from "../schemas";

export const userRepository = {
  async create(data: CreateUserData) {
    return await User.create(data);
  },

  async findById(id: string) {
    return await User.findById(id).populate('imageUrl');
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
