import { getDataFromToken } from "@/app/helper/getDataFromToken";
import { connect } from "@/dbConfig/dbConfig";
import User from "@/models/userModel";
import { NextRequest, NextResponse } from "next/server";
connect();

export async function GET(req: NextRequest) {
  try {
    const userId = await getDataFromToken(req);
    console.log(userId, "userId");
    const user = await User.findById({ _id: userId }).select("-password");
    return NextResponse.json(
      { message: "User found", data: user },
      { status: 200 }
    );
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
