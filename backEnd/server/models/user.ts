import { Schema } from "mongoose";
import { defineMongooseModel } from "#nuxt/mongoose";

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
      minLength: [8, "Password must be at least 8 characters"],
      match: [
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
        "week password try something stronger !",
      ],
    },
    imageUrl: {
      type: String,
      required: true,
    },
    isAdmin: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
  {},
);

export const User = defineMongooseModel({
  name: "User",
  schema: userSchema,
});
