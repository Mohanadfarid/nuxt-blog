export enum ErrorTypes {
  VALIDATION_ERROR = "validation_error",
  AUTH_ERROR = "auth_error",
  NOT_FOUND = "not_found",
  PERMISSION_DENIED = "permission_denied",
  INTERNAL_ERROR = "internal_error",
}

export type ErrorType = `${ErrorTypes}`;
