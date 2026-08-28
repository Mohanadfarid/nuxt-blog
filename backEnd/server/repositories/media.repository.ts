import { Media } from "../models/media";
import type { CreateMediaDto } from "../types";

export const mediaRepository = {
  async create(data: CreateMediaDto, options?: any) {
    console.log("data in repository", data);
    return await Media.create(data, options);
  },

  async findById(id: string) {
    return await Media.findById(id);
  },
};
