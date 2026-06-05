import { email, z } from "zod";
import type { Types } from "mongoose";

export const loginUserSchema = z.object({
  email: z.email(),
  password: z.string(),
});

export type LoginUserDto = z.infer<typeof loginUserSchema>;
