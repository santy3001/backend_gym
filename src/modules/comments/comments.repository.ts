import CommentModel, { IComment } from "./comments.model";

export class CommentsRepository {
  async findAll() {
    return await CommentModel.find();
  }

  async findById(id: string) {
    return await CommentModel.findById(id);
  }

  async create(data: IComment) {
    return await CommentModel.create(data);
  }

  async updateById(
    id: string,
    data: Partial<Pick<IComment, "text" | "userId" | "projectId">>
  ) {
    return await CommentModel.findByIdAndUpdate(id, data, { new: true });
  }

  async deleteById(id: string) {
    return await CommentModel.findByIdAndDelete(id);
  }
}