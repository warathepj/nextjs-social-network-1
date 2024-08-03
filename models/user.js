import mongoose, { Schema } from "mongoose";
const userSchema = new Schema({
  name: {
    type: String,
    required: true,
// Suggested code may be subject to a license. Learn more: ~LicenseLog:1538667080.
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    required: false,
    default: "user",
  },
});
const User = mongoose.models.User || mongoose.model("User", userSchema);
export default User;