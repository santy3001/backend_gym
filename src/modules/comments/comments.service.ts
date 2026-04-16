import { CommentsRepository } from "./comments.repository";
import { IComment } from "./comments.model";

export class CommentsService {
  private readonly repository = new CommentsRepository();

  async getAllComments() {
    return await this.repository.findAll();
  }

  async getCommentById(commentId: string) {
    return await this.repository.findById(commentId);
  }

  async createComment(data: IComment) {
    return await this.repository.create(data);
  }

  async updateComment(
    commentId: string,
    data: Partial<Pick<IComment, "text" | "userId" | "projectId">>
  ) {
    return await this.repository.updateById(commentId, data);
  }

  async deleteComment(commentId: string) {
    return await this.repository.deleteById(commentId);
  }
}