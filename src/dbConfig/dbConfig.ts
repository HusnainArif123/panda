import mongoose, { connection } from "mongoose";

export const connect = async () => {
  try {
    mongoose.connect(
      "mongodb+srv://youtube:12345@cluster0.6kxfr.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
    );
    const connection = mongoose.connection;
    connection.once("connected", () => {
      console.log("MongoDB connected Successfully");
    });
  } catch (err) {
    console.log("Something went wrong", err);
    process.exit();
  }
};
