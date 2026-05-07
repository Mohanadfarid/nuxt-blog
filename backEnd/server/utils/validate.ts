import type { H3Event } from "h3";
import { z } from "zod";
import { ErrorTypes } from "../types";

export function validate<T>(
  schema: z.ZodSchema<T>,
  data: unknown,
  event: H3Event,
): T {
  const result = schema.safeParse(data);
  if (!result.success) {
    setResponseStatus(event, 422);
    throw createError({
      message: "Validation failed",
      status: 422,
      statusText: "unprocessable entity",
      data: {
        type: ErrorTypes.VALIDATION_ERROR,
        errors: z.flattenError(result.error),
      },
    });
  }
  return result.data;
}
