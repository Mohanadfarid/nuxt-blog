import { ErrorTypes } from "../types";
import { AppError } from "./appError";

export const errorFactory = {
  validation(errors: Record<string, string>) {
    return new AppError({
      message: "Validation failed",
      statusCode: 422,
      type: ErrorTypes.VALIDATION_ERROR,
      errors,
    });
  },

  auth(message?: string) {
    return new AppError({
      message: message || "invalid email or password",
      statusCode: 401,
      type: ErrorTypes.AUTH_ERROR,
      errors: [],
    });
  },

  notFound(message?: string) {
    return new AppError({
      message: message || "Resource not found",
      statusCode: 404,
      type: ErrorTypes.NOT_FOUND_ERROR,
      errors: [],
    });
  },
  conflict(message?: string) {
    return new AppError({
      message: message || "Resource conflict",
      statusCode: 409,
      type: ErrorTypes.CONFLICT_ERROR,
      errors: [],
    });
  },
};
