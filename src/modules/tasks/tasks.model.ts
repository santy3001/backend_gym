import { Schema, model } from "mongoose";

export interface ITask {
  title: string;
  description?: string;
  status: "pending" | "in_progress" | "done";
}

const taskSchema = new Schema<ITask>(
  {
    title: { type: String, required: true },
    description: { type: String },
    status: {
      type: String,
      enum: ["pending", "in_progress", "done"],
      default: "pending"
    }
  },
  { timestamps: true }
);

const TaskModel = model<ITask>("Task", taskSchema);

export default TaskModel;