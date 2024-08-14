import dbConnect from '../../lib/db';
import User from '../../models/User';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { name } = req.body;

    try {
      await dbConnect();
      const user = await User.create({ name });
      res.status(201).json({ success: true, data: user });
    } catch (error) {
      res.status(400).json({ success: false, message: error.message });
    }
  } else {
    res.status(405).json({ success: false, message: 'Method not allowed' });
  }
}