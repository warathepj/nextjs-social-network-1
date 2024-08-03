   // models/Comment.js
   import mongoose from 'mongoose';

   const CommentSchema = new mongoose.Schema({
     name: String,
     email: String,
     movie_id: mongoose.Schema.Types.ObjectId,
     text: String,
     date: Date,
   });

   export default mongoose.models.Comment || mongoose.model('Comment', CommentSchema);