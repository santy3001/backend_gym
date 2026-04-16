import { Request, Response, NextFunction } from "express";
import { CommentsService } from "./comments.service";

export class CommentsController {
  private readonly commentsService = new CommentsService();

  async getAll(_req: Request, res: Response, next: NextFunction) {
    try {
      const comments = await this.commentsService.getAllComments();
      res.status(200).json(comments);
    } catch (error) {
      next(error);
    }
  }

  async getById(req: Request, res: Response, next: NextFunction) {
    try {
      const id = String(req.params.id);
      const comment = await this.commentsService.getCommentById(id);

      if (!comment) {
        return res.status(404).json({ message: "Comentario no encontrado" });
      }

      res.status(200).json(comment);
    } catch (error) {
      next(error);
    }
  }

  async create(req: Request, res: Response, next: NextFunction) {
    try {
      const comment = await this.commentsService.createComment(req.body);
      res.status(201).json(comment);
    } catch (error) {
      next(error);
    }
  }

  async update(req: Request, res: Response, next: NextFunction) {
    try {
      const id = String(req.params.id);
      const comment = await this.commentsService.updateComment(id, req.body);

      if (!comment) {
        return res.status(404).json({ message: "Comentario no encontrado" });
      }

      res.status(200).json(comment);
    } catch (error) {
      next(error);
    }
  }

  async remove(req: Request, res: Response, next: NextFunction) {
    try {
      const id = String(req.params.id);
      const comment = await this.commentsService.deleteComment(id);

      if (!comment) {
        return res.status(404).json({ message: "Comentario no encontrado" });
      }

      res.status(200).json({ message: "Comentario eliminado" });
    } catch (error) {
      next(error);
    }
  }
}