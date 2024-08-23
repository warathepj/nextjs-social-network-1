import { NextResponse } from 'next/server'
import dbConnect  from '../../lib/db';
import User from '../../models/User';

export async function POST(req) {
    // try {

        // await dbConnect();
        // const { email } = await req.json();
        // const user = await User.findOne({ email }).select("_id");
        // console.log("User: ", user)

        // return NextResponse.json({ user })

    // } 
    // catch(error) {
    //     return NextResponse.json({ message: "An error occured while registering the user." }, { status: 500 })
    // }
}