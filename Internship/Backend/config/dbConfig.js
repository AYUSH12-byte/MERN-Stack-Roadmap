import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      serverSelectionTimeoutMS: 10000,
    });

    console.log("✅ MongoDB Connected");

  } catch (error) {
    console.log("❌ Database Connection Failed");
    console.log(error.message);
    process.exit(1);
  }
};

export default connectDB;