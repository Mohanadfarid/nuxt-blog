import { User } from "../models/user";
import type { CreateUserData, UpdateUserDto } from "../schemas";

export const userRepository = {
  async create(data: CreateUserData, options?: any) {
    return await User.create([data], options);
  },

  async findById(id: string) {
    return await User.findById(id).populate("profileImage");
  },

  async findByEmail(email: string) {
    return await User.findOne({ email: email }).populate('profileImage');
  },
  async findAll() {
    return await User.find().populate("profileImage");
  },

  async deleteById(id: string) {
    return await User.findByIdAndDelete(id);
  },

  async updateOne(id: string, data: UpdateUserDto) {
    return await User.findByIdAndUpdate(id, data, { returnDocument: "after" });
  },
};
