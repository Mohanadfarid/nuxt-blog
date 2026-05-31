import { ErrorTypes, type ErrorType } from "../types";

export class AppError extends Error {
  statusCode: number;
  type: ErrorType;
  errors?: Record<string, string>;
  constructor({
    message,
    statusCode = 500,
    type = ErrorTypes.INTERNAL_ERROR,
    errors,
  }) {
    super(message);
    this.statusCode = statusCode;
    this.type = type;
    this.errors = errors;
  }
}
