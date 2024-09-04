import mongoose from "mongoose";
export default function connectMongoDb() {
  const uri = process.env.MONGO_URI;
  mongoose.connect(uri);
}
