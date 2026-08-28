import { validate } from "../../helpers";
import { createPostSchema } from "../../schemas";
import { postService } from "../../services/post.service";
import type { CreatePostDto } from "../../types/post/post";

export default defineAuthHandler(async (event) => {
  //read data
  const body = await readFormData(event);
  const data = Object.fromEntries(body.entries());
  data.postAttachments = body.getAll("postAttachments");

  //validate data
  const validData = validate<CreatePostDto>(createPostSchema, data);

  //porccess data
  const session = await requireUserSession(event);
  const post = await postService.createPost(validData, session);
  // console.log("validData", validData);
  return { message: "post created successfully", post };
});
