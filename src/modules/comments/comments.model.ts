import { Schema, model } from "mongoose";

export interface IComment {
  text: string;
  userId: string;
  projectId: string;
}

const commentSchema = new Schema<IComment>(
  {
    text: { type: String, required: true },
    userId: { type: String, required: true },
    projectId: { type: String, required: true }
  },
  { timestamps: true }
);

const CommentModel = model<IComment>("Comment", commentSchema);

export default CommentModel;