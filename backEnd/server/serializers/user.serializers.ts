import { constructUrlbyFilePath } from "../helpers";

export function toUserResponse(user: any) {
  console.log(user.imageUrl.path)
  console.log(constructUrlbyFilePath(user.imageUrl.path))
  return {
    id: user.id,
    name: user.name,
    email: user.email,
    isAdmin: user.isAdmin,
    createdAt: user.createdAt,
    updatedAt: user.updatedAt,
    imageUrl: constructUrlbyFilePath(user.imageUrl.path),
  };
}

export function toUserResponseList(users: any[]) {
  return users.map(toUserResponse);
}
