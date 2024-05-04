import mongoose, { Model } from "mongoose";
import validator from "validator";

interface IAuth {
  email: string;
  password: string;
  role: "admin" | "user";
  verified: boolean;
  createdAt: Date;
}

const authSchema = new mongoose.Schema<IAuth, Model<IAuth>>({
  email: {
    type: String,
    required: [true, "Please enter your email address"],
    unique: true,
    validate: [validator.isEmail, "Please enter a valid email address"],
  },
  password: {
    type: String,
    required: [true, "Please enter your password"],
    minLength: [6, "Password must be at least 6 characters"],
  },
  role: {
    type: String,
    default: "user",
  },
  verified: {
    type: Boolean,
    default: false,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

export default authSchema;
