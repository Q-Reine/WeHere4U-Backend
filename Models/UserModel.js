import mongoose from "mongoose";

const { model, Schema } = mongoose;

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true,
      unique: true
    },
    password: {
      type: String,
      required: true
    },
    role: {
      type: String,
      required: true,
      default: "user",
      enum: ["user", "admin"]
    },
    tokens: {
      token: {
        type: String,
        default: ""
      }
    }
  },
  { timestamps: true }
);

// Export the model
const User = model("user", userSchema);
export default User;