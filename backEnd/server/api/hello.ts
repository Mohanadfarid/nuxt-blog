import { User } from "../models/user";

export default defineEventHandler(async (event) => {
  const user =  new User({ name: "some name" });
  await user.save();
  console.log(user.sayHello())
  console.log(user.sayHello2())
  return {
    hello: "world",
    user,
  };
});
