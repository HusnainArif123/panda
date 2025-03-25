import { connect } from "@/dbConfig/dbConfig";
import { NextRequest, NextResponse } from "next/server";
import RestaurantsDetails from "@/models/resturantDetails"; // Ensure correct model import

connect();

export async function GET(req: NextRequest) {
  try {
    let restaurantsFromDb = await RestaurantsDetails.find();

    if (restaurantsFromDb.length === 0) {
      const hardcodedData = [
        {
          name: "Hadeer Restaurant",
          category: "Cakes N Pastries",
          location: "Lahore",
          image:
            "https://t4.ftcdn.net/jpg/01/96/92/43/240_F_196924308_dm97P0Ob8WhOW0GvAzKWjd0WgP7trPTL.jpg",
        },
        {
          name: "Burger Boss pk",
          category: "Fast Food",
          location: "Lahore",
          image:
            "https://as2.ftcdn.net/v2/jpg/02/44/61/19/1000_F_244611927_yrh0ZIYwOGTDurVnCMAt7Cq8DR4sBkB0.jpg",
        },
        {
          name: "Sizzling Sir Johar Town",
          category: "Fast Food, Wraps, Burgers",
          location: "Lahore",
          image:
            "https://t3.ftcdn.net/jpg/01/33/61/72/240_F_133617244_dWdivRXwoLVzowl1kn3iFP9JGcuNd8n6.jpg",
        },
        {
          name: "Khalida'sKitchen",
          category: "Cakes N Pastries",
          location: "Lahore",
          image:
            "https://t3.ftcdn.net/jpg/02/45/45/62/240_F_245456223_CrK1J9ePGfc1UW2QncGmFfycpI3vFnxI.jpg",
        },
      ];

      await RestaurantsDetails.insertMany(hardcodedData);
      restaurantsFromDb = await RestaurantsDetails.find();
    }

    return NextResponse.json(
      { message: "Restaurants data retrieved", data: restaurantsFromDb },
      { status: 200 }
    );
  } catch (error: any) {
    console.error(error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
