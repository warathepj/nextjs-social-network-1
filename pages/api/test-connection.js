import dbConnect from '../../lib/dbConnect';
import Comment from '../../models/Comment';

export default async function handler(req, res) {
  try {
    await dbConnect();
    res.status(200).json({ message: 'Connected to MongoDB Atlas successfully!', comments });
  } catch (error) {
    res.status(500).json({ error: 'Failed to connect to MongoDB Atlas' });
  }
}