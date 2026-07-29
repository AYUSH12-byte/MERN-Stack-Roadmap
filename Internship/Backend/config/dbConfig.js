import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      serverSelectionTimeoutMS: 30000,
    });

    console.log("✅ MongoDB Connected");

  } catch (error) {
    console.log("❌ Database Connection Failed");
    console.log(error);
  }
};

export default connectDB;