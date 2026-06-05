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
};
