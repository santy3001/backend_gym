import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/database";
import usersRoutes from "./modules/users/users.routes";
import authRoutes from "./modules/auth/auth.routes";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use("/api/v1/users", usersRoutes);
app.use("/api/v1/auth", authRoutes);

app.get("/", (_req, res) => {
  res.send("Servidor corriendo");
});

app.listen(PORT, async () => {
  await connectDB();
  console.log(`Server running on port ${PORT}`);
});