import type { EventHandler, EventHandlerRequest } from "h3";

export const defineAuthHandler = <T extends EventHandlerRequest, D>(
  handler: EventHandler<T, D>,
): EventHandler<T, D> =>
  defineEventHandler<T>(async (event) => {
    await requireUserSession(event);
    const response = await handler(event);
    return { response };
  });
