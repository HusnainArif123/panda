import { connect } from "@/dbConfig/dbConfig";
import { NextRequest, NextResponse } from "next/server";
import websiteInfo from "@/models/websiteInfo";

connect();

export async function GET(req: NextRequest) {
  try {
    let websiteData = await websiteInfo.find();

    if (websiteData.length === 0) {
      const hardcodedData = [
        {
          address: "499 Flock Coworking Johar Town Lahore",
          phoneNo: "042-9499440-4",
          email: "food_dragon@gmail.com",
        },
      ];
      await websiteInfo.insertMany(hardcodedData);
      websiteData = await websiteInfo.find();
    }
    return NextResponse.json(
      { message: "WebSite data retrieved", data: websiteData },
      { status: 200 }
    );
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
