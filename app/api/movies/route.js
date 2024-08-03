import clientPromise from '@/lib/mongodb';

export async function GET() {
  try {
    const client = await clientPromise;
    const db = client.db(process.env.DB_NAME);
    const movies = await db.collection("movies").find({}).limit(20).toArray();
    return Response.json(movies);
  } catch (error) {
    return Response.json({ error: 'Failed to fetch movies' }, { status: 500 });
  }
}