import { toHttpError } from "../helpers/toHttpError";
import { errorFactory } from "./errorFactory";

export const httpErrorFactory = {
  validation(errors: Record<string, string>) {
    return toHttpError(errorFactory.validation(errors));
  },
  auth(message?: string) {
    return toHttpError(errorFactory.auth(message));
  },
};
