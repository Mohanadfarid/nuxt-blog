import { Schema } from "mongoose";
import { defineMongooseModel } from "#nuxt/mongoose";

export interface IUser {
  name: string;
  email: string;
  password: string;
  profileImage?: string;
  isAdmin: boolean;
}

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      validate: {
        validator: function (v) {
          return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
        },
        message: (props) => `${props.value} is not a correct email format`,
      },
    },
    password: {
      type: String,
      required: [true, "password is required"],
    },
    profileImage: {
      type: Schema.Types.ObjectId,
      ref: "Media",
    },
    isAdmin: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
  {
    timestamps: true,
  },
);

export const User = defineMongooseModel<IUser>({
  name: "User",
  schema: userSchema,
});
