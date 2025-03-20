import { connect } from "@/dbConfig/dbConfig";
import User from "@/models/userModel";
import bcrypt from "bcryptjs";
import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken";

connect();

export async function POST(req: NextRequest) {
  try {
    const reqBody = await req.json();
    const { email, password } = reqBody;

    console.log("Request Body :", reqBody);

    const findUser = await User.findOne({ email });
    if (!findUser) {
      return NextResponse.json(
        { error: "User does not exist" },
        { status: 404 }
      );
    }

    const validPassword = await bcrypt.compare(password, findUser.password);
    if (!validPassword) {
      return NextResponse.json({ error: "Invalid Password" }, { status: 400 });
    }

    //create a token data

    const tokenData = {
      id: findUser._id,
      email: findUser.email,
    };
    //create a token
    const token = await jwt.sign(tokenData, " ", {
      expiresIn: "2d",
    });

    const response = await NextResponse.json(
      {
        message: "User Logged In Successfully",
        success: true,
        token,
      },
      { status: 200 }
    );
    response.cookies.set("token", token, { httpOnly: true });

    return response;
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
