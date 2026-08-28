import { validate } from "~/backEnd/server/helpers";
import {
  updatePostSchema,
  updateUserSchema,
  type UpdatePostDto,
} from "~/backEnd/server/schemas";
import { postService } from "~/backEnd/server/services/post.service";

export default defineAuthHandler(async (event) => {
  const postId = getRouterParam(event, "id");

  const body = await readFormData(event);
  const data = Object.fromEntries(body.entries());
  data.postAttachments = body.getAll("postAttachments");

  const validData = validate<UpdatePostDto>(updatePostSchema, data);

  console.log(validData, "validData");
  const updatedPost = await postService.updatePost(postId, validData);

  return { message: "patch post by id : " + postId, updatedPost };
});
