


import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  // createdAt: { type: Date, default: Date.now },
  email: {
        type: String,
        required: true,
        unique: true,
      },
      password: {
            type: String,
            required: true,
          }
          // role: {
          //   type: String,
          //   required: false,
          //   default: "user",
          // },
});

export default mongoose.models.User || mongoose.model('User', UserSchema);



