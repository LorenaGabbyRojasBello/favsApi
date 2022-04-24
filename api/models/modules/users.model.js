import mongoose from "mongoose";

// schema User
const schemaUser = {
  email: String,
  password: String,
};

// User model
const User = mongoose.model("User", schemaUser, "users");

export default User;
