import { Schema, model } from "mongoose";

export interface Plan {
  name: string;
  description?: string;
  price: number;
  durationDays: number;
  status: "active" | "inactive";
}

const PlanSchema = new Schema<Plan>(
  {
    name: { type: String, required: true },
    description: { type: String },
    price: { type: Number, required: true },
    durationDays: { type: Number, required: true },
    status: { type: String, enum: ["active", "inactive"], default: "active" },
  },
  { timestamps: true }
);

export const PlanModel = model<Plan>("Plan", PlanSchema);