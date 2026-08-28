
import { z } from "zod";

import { httpErrorFactory } from "../errors/httpErrorFactory";

export function validate<T>(
  schema: z.ZodSchema<T>,
  data: unknown,
): T {
  console.log('data',data)
  const result = schema.safeParse(data);
  if (!result.success) {
    console.log('result',result)
    const errors = z.flattenError(result.error)
    throw httpErrorFactory.validation(errors)
  }
  return result.data;
}
