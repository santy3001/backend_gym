import express from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import compression from "compression";
import swaggerUi from "swagger-ui-express";
import { swaggerSpec } from "./config/openApi";

const app = express();

app.use(cors());
app.use(helmet());
app.use(compression());
app.use(morgan("dev"));
app.use(express.json());

app.get("/", (_req, res) => {
  res.status(200).send("OK");
});

app.use("/api/v1/docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

export default app;