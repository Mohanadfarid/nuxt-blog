import { userRepository } from "~/backEnd/server/repositories";

export default defineAuthHandler(async (event) => {
  const userId = getRouterParam(event, "id");
  const res = await userRepository.deleteById(userId);
  
  console.log(res);
  return { message: "delete user by id : " + userId, res, success: true };
});
