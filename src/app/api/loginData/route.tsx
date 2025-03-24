import { connect } from "@/dbConfig/dbConfig";
import { NextRequest, NextResponse } from "next/server";
import LoginDetail from "@/models/loginData"; // Ensure correct model import

connect();

export async function GET(req: NextRequest) {
  try {
    let loginDataFromDb = await LoginDetail.find();

    if (loginDataFromDb.length === 0) {
      const hardcodedData = [
        {
          title: "Welcome to foodDragon",
          description:
            "Enjoy a seamless and hassle-free food ordering experience. Sign in to explore a wide variety of delicious dishes, place your order effortlessly, and track it in real time. Whether you're craving a quick snack or a full meal, we've got you covered.Stay updated with every step of your order, from preparation to doorstep delivery. Save your favorite meals for faster reordering and enjoy exclusive offers tailored just for you.New here? Create an account now and start enjoying the convenience of online food ordering!",
        },
      ];

      await LoginDetail.insertMany(hardcodedData);
      loginDataFromDb = await LoginDetail.find();
    }

    return NextResponse.json(
      { message: "User found", data: loginDataFromDb },
      { status: 200 }
    );
  } catch (error: any) {
    console.error(error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
