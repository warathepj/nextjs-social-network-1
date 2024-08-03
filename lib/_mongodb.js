// app/lib/mongodb.js/
// "use client"
// from app/lib/mongodb.js/ how to render app/movies/page.js/
import mongoose from 'mongoose';

// Suggested code may be subject to a license. Learn more: ~LicenseLog:3468156411.
// Suggested code may be subject to a license. Learn more: ~LicenseLog:3788991133.
export const connectMongoDB = async () => {
  try {
    await mongoose.connect('/');
    // await mongoose.connect(process.env.MONGODB_URI);
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
  }
};