import { NextResponse } from "next/server";
import { connectMongoDB } from "@/lib/mongodb";
import { dbConnect } from "@/lib/XdbConnect";
import User from "../../../models/User";//models/user.js
import bcrypt from "bcrypt";

export async function POST(req) {
  try {
    // const body = await req.json();
    const { name, email, password } = await req.json();
    const hashedPassword = await bcrypt.hash(password, 10);
    await connectMongoDB();
    await User.create({ name, email, password: hashedPassword });
    const user = await User.create({
      name,
      email,
      password: hashedPassword,
    });
    console.log("name: ", name);
    console.log("email: ", email);
    console.log("password: ", password)
    if (!name || !email || !password) {
      return NextResponse.json({ message: "please fill in all fields" }, { status: 400 });
    } else {
      return NextResponse.json({ message: "success" }, { status: 200 });
    }
  } catch (error) {
    return NextResponse.json({ message: "an error occur while registering" }, { status: 500 });

    console.log(error);
  }
}

