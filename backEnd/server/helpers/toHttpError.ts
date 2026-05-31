import { createError } from "h3";
import type { AppError } from "../errors/appError";

export function toHttpError(error: AppError) {
  return createError({
    statusCode: error.statusCode,
    statusMessage: error.message,
    data: {
      type: error.type,
      errors: error.errors,
    },
  });
}
