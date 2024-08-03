import mongoose from 'mongoose';

const CommentSchema = new mongoose.Schema({
  name: String,
  // Add other fields as needed
});

export default mongoose.models.Comment || mongoose.model('Comment', CommentSchema, 'comments');