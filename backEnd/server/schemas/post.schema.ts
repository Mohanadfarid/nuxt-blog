import { email, z } from "zod";
import type { Types } from "mongoose";
export const createPostSchema = z.object({
  title: z.string().min(2),
  body: z.string().min(10),
  postAttachments: z.array(
    z.file().max(2_000_000).mime(["image/png", "image/jpeg"]),
  ).optional(),
});

export const updatePostSchema = z.object({
  title: z.string().min(2).optional(),
  body: z.string().min(10).optional(),
  postAttachments: z.array(
    z.file().max(2_000_000).mime(["image/png", "image/jpeg"]),
  ).optional(),
});

export type CreatePostDto = z.infer<typeof createPostSchema>;
export type CreatePostData = Omit<CreatePostDto, "file"> & {
  profileImage: Types.ObjectId;
};

export type UpdatePostDto = z.infer<typeof updatePostSchema>;
