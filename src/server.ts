import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/database";
import swaggerUi from "swagger-ui-express";
import { swaggerSpec } from "./config/openApi";

import authRoutes from "./modules/auth/auth.routes";
import usersRoutes from "./modules/users/users.routes";
import membersRoutes from "./modules/members/members.routes";
import classesRoutes from "./modules/classes/classes.routes";
import paymentsRoutes from "./modules/payments/payments.routes";
import plansRoutes from "./modules/plans/plans.routes";
import membershipsRoutes from "./modules/memberships/memberships.routes";
import commentsRoutes from "./modules/comments/comments.routes";
import notificationsRoutes from "./modules/notifications/notifications.routes";
import reportsRoutes from "./modules/reports/reports.routes";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/users", usersRoutes);
app.use("/api/v1/members", membersRoutes);
app.use("/api/v1/classes", classesRoutes);
app.use("/api/v1/payments", paymentsRoutes);
app.use("/api/v1/plans", plansRoutes);
app.use("/api/v1/memberships", membershipsRoutes);
app.use("/api/v1/comments", commentsRoutes);
app.use("/api/v1/notifications", notificationsRoutes);
app.use("/api/v1/reports", reportsRoutes);

app.use("/api/v1/docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.get("/", (_req, res) => {
  res.json({
    message: "🚀 Gym Enterprise Backend OK - 75% Complete",
    swagger: "http://localhost:3000/api/v1/docs",
  });
});

app.listen(PORT, async () => {
  await connectDB();
  console.log(`🚀 Server: http://localhost:${PORT}`);
});