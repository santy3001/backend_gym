import { Request, Response, NextFunction } from "express";
import { TasksService } from "./tasks.service";

export class TasksController {
  private readonly tasksService = new TasksService();

  async getAll(_req: Request, res: Response, next: NextFunction) {
    try {
      const tasks = await this.tasksService.getAllTasks();
      res.status(200).json(tasks);
    } catch (error) {
      next(error);
    }
  }

  async getById(req: Request, res: Response, next: NextFunction) {
    try {
      const id = String(req.params.id);
      const task = await this.tasksService.getTaskById(id);

      if (!task) {
        return res.status(404).json({ message: "Tarea no encontrada" });
      }

      res.status(200).json(task);
    } catch (error) {
      next(error);
    }
  }

  async create(req: Request, res: Response, next: NextFunction) {
    try {
      const task = await this.tasksService.createTask(req.body);
      res.status(201).json(task);
    } catch (error) {
      next(error);
    }
  }

  async update(req: Request, res: Response, next: NextFunction) {
    try {
      const id = String(req.params.id);
      const task = await this.tasksService.updateTask(id, req.body);

      if (!task) {
        return res.status(404).json({ message: "Tarea no encontrada" });
      }

      res.status(200).json(task);
    } catch (error) {
      next(error);
    }
  }

  async remove(req: Request, res: Response, next: NextFunction) {
    try {
      const id = String(req.params.id);
      const task = await this.tasksService.deleteTask(id);

      if (!task) {
        return res.status(404).json({ message: "Tarea no encontrada" });
      }

      res.status(200).json({ message: "Tarea eliminada" });
    } catch (error) {
      next(error);
    }
  }
}