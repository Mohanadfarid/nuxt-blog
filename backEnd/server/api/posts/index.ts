import { postService } from "../../services/post.service";

export default defineAuthHandler(async (event) => {
  const posts = await postService.getPosts();
  return { message: "get all posts", posts };
});
  