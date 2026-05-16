import { Media } from "../models/media";
import type { CreateMediaDto } from "../types";

export const mediaRepository = {
  async create(data: CreateMediaDto) {
    return await Media.create(data);
  },

  async findById(id: string) {
    return await Media.findById(id);
  },
};
