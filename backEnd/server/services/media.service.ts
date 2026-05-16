import { mediaRepository } from "../repositories/media.repository";
import type { CreateMediaDto } from "../types";

export const mediaService = {
  async createMedia(data: CreateMediaDto) {
    return mediaRepository.create(data);
  },
};
