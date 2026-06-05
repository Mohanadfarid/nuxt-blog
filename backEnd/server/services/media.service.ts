import { mediaRepository } from "../repositories";
import type { CreateMediaDto } from "../types";

export const mediaService = {
  async createMedia(data: CreateMediaDto, options?: any) {
    return mediaRepository.create(data, options);
  },
};
