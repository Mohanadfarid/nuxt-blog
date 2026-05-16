import { email, z } from "zod";
import type { Types } from "mongoose";
export const createUserSchema = z.object({
  name: z.string().min(2),
  email: z.email(),
  password: z
    .string()
    .min(8, "Password must be at least 8 characters")
    .regex(/[a-z]/, "Must contain at least one lowercase letter")
    .regex(/[A-Z]/, "Must contain at least one uppercase letter")
    .regex(/\d/, "Must contain at least one number")
    .regex(/[@$!%*?&]/, "Must contain at least one special character"),
  isAdmin: z.coerce.boolean(),
  file: z.file().max(2_000_000).mime(["image/png", "image/jpeg"]),
});

export const updateUserSchema = z.object({
  name: z.string().min(2).optional(),
  email: z.email().optional(),
  password: z
    .string()
    .min(8, "Password must be at least 8 characters")
    .regex(/[a-z]/, "Must contain at least one lowercase letter")
    .regex(/[A-Z]/, "Must contain at least one uppercase letter")
    .regex(/\d/, "Must contain at least one number")
    .regex(/[@$!%*?&]/, "Must contain at least one special character"),
  imageUrl: z.string().optional(),
  isAdmin: z.boolean().optional(),
});

export type CreateUserDto = z.infer<typeof createUserSchema>;
export type CreateUserData = Omit<CreateUserDto, "file"> & {
  imageUrl: Types.ObjectId;
};

export type UpdateUserDto = z.infer<typeof updateUserSchema>;
