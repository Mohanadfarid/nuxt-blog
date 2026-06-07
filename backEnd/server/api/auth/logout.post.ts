import { authService } from "../../services";

export default defineEventHandler(async (event) => {
  const res = await authService.logoutUser(event);

  return { message: "logged out successfully", res };
});
