import { Schema, model } from "mongoose";

export interface Member {
  name: string;
  email: string;
  phone: string;
  address?: string;
  birthDate?: Date;
  status: "active" | "inactive";
}

const MemberSchema = new Schema<Member>(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    phone: { type: String, required: true },
    address: { type: String },
    birthDate: { type: Date },
    status: { type: String, enum: ["active", "inactive"], default: "active" },
  },
  { timestamps: true }
);

export const MemberModel = model<Member>("Member", MemberSchema);