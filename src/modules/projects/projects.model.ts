import { Schema, model } from "mongoose";

export interface IProject {
  title: string;
  description?: string;
  status: "active" | "inactive" | "completed";
}

const projectSchema = new Schema<IProject>(
  {
    title: { type: String, required: true },
    description: { type: String },
    status: {
      type: String,
      enum: ["active", "inactive", "completed"],
      default: "active"
    }
  },
  { timestamps: true }
);

const ProjectModel = model<IProject>("Project", projectSchema);

export default ProjectModel;