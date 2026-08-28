import type z from "zod";
import type { createPostSchema } from "../../schemas";

export type CreatePostDto = z.infer<typeof createPostSchema>;
export interface CreatePostInput {}
export interface CreatePostData {}
