export enum ErrorTypes {
  VALIDATION_ERROR = "validation_error",
  AUTH_ERROR = "auth_error",
  CONFLICT_ERROR = "conflict_error",
  NOT_FOUND_ERROR = "not_found",
  PERMISSION_DENIED = "permission_denied",
  INTERNAL_ERROR = "internal_error",
}

export type ErrorType = `${ErrorTypes}`;
