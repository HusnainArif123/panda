import { NextRequest } from "next/server";
import jwt from "jsonwebtoken";

export const getDataFromToken = (req: NextRequest) => {
  try {
    const token = req.cookies.get("token")?.value || "";
    console.log(token, "token");
    const decodedToken: any = jwt.verify(token, "nextJsPanda");
    console.log("Decoded Token:", decodedToken.id);
    return decodedToken.id;
  } catch (error: any) {
    return error.message;
  }
};
