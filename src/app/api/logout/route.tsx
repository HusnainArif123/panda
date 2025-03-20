import { connect } from "@/dbConfig/dbConfig";
import { NextRequest, NextResponse } from "next/server";

connect();

export async function GET(req: NextRequest) {
  try {
    const response = NextResponse.json(
      { message: "Logout successfully", success: true },
      { status: 200 }
    );

    // Correct way to set cookies
    response.cookies.set({
      name: "token",
      value: "",
      httpOnly: true,
      expires: new Date(0), // Expire immediately
    });

    return response;
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
