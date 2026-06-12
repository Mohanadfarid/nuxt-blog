import { constructUrlbyFilePath } from "../helpers";

export function toUserResponse(user: any) {
  console.log(user.profileImage.path)
  console.log(constructUrlbyFilePath(user.profileImage.path))
  return {
    id: user.id,
    name: user.name,
    email: user.email,
    isAdmin: user.isAdmin,
    createdAt: user.createdAt,
    updatedAt: user.updatedAt,
    profileImage: constructUrlbyFilePath(user.profileImage.path),
  };
}

export function toUserResponseList(users: any[]) {
  return users.map(toUserResponse);
}
