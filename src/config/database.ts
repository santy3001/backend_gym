import mongoose from "mongoose";

const connectDB = async (): Promise<void> => {
  try {
    const uri = process.env.MONGO_URI;
    if (!uri) {
      throw new Error("MONGO_URI no está definida");
    }

    await mongoose.connect(uri);
    console.log("MongoDB conectado");
  } catch (error) {
    if (error instanceof Error) {
      console.error("Error conectando a MongoDB:", error.message);
    } else {
      console.error("Error conectando a MongoDB:", error);
    }
    process.exit(1);
  }
};

export default connectDB;