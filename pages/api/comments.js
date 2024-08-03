   // pages/api/comments.js
   import dbConnect from '../../lib/mongodb';
   import Comment from '../../models/Comment';

   export default async function handler(req, res) {
     await dbConnect();

     try {
       const comments = await Comment.find({}, 'name').limit(5);
       res.status(200).json(comments);
     } catch (error) {
       res.status(500).json({ error: 'Failed to fetch comments' });
     }
   }