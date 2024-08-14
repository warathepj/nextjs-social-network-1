import { NextResponse } from 'next/server'
// import { connectMongoDB } from '../../../../lib/mongodb';
import { dbConnect } from '../../../lib/db';
// import User from '../../../../models/user';
import User from '../../../../models/User';
// import bcrypt from 'bcryptjs'

export async function POST(req) {
    try {

        const { name } = await req.json();
        // const { name, email, password } = await req.json();
        // const hashedPassword = await bcrypt.hash(password, 10);

        await dbConnect();
        // await connectMongoDB();
        await User.create({ name });
        // await User.create({ name, email, password: hashedPassword });

        return NextResponse.json({ message: "User registered." }, { status: 201 })

    } catch(error) {

        return NextResponse.json({ 
            message: "An error occured while registering the user." }, { status: 500 })

    }
}