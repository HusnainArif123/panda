import { connect } from "@/dbConfig/dbConfig";
import { NextRequest, NextResponse } from "next/server";
import User from "@/models/userModel";
import { use } from "react";

connect();

export async function POST(req: NextRequest) {
  try {
    const reBody = await req.json();
    const { token } = reBody;
    console.log(token, "token");
    const user = await User.findOne({
      verificationToken: token,
      verificationExpire: { $gt: Date.now() },
    });

    if (!user) {
      return NextResponse.json({ error: "User not Found" }, { status: 400 });
    }
    console.log(user, "user");

    user.isVerified = true;
    user.verificationToken = undefined;
    user.verificationExpire = undefined;
    await user.save();

    return NextResponse.json({ message: "Email Verified", success: true });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
