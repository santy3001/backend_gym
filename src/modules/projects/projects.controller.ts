import { Request, Response, NextFunction } from "express";
import { ProjectsService } from "./projects.service";

export class ProjectsController {
  private readonly projectsService = new ProjectsService();

  async getAll(_req: Request, res: Response, next: NextFunction) {
    try {
      const projects = await this.projectsService.getAllProjects();
      res.status(200).json(projects);
    } catch (error) {
      next(error);
    }
  }

  async getById(req: Request, res: Response, next: NextFunction) {
    try {
      const id = String(req.params.id);
      const project = await this.projectsService.getProjectById(id);

      if (!project) {
        return res.status(404).json({ message: "Proyecto no encontrado" });
      }

      res.status(200).json(project);
    } catch (error) {
      next(error);
    }
  }

  async create(req: Request, res: Response, next: NextFunction) {
    try {
      const project = await this.projectsService.createProject(req.body);
      res.status(201).json(project);
    } catch (error) {
      next(error);
    }
  }

  async update(req: Request, res: Response, next: NextFunction) {
    try {
      const id = String(req.params.id);
      const project = await this.projectsService.updateProject(id, req.body);

      if (!project) {
        return res.status(404).json({ message: "Proyecto no encontrado" });
      }

      res.status(200).json(project);
    } catch (error) {
      next(error);
    }
  }

  async remove(req: Request, res: Response, next: NextFunction) {
    try {
      const id = String(req.params.id);
      const project = await this.projectsService.deleteProject(id);

      if (!project) {
        return res.status(404).json({ message: "Proyecto no encontrado" });
      }

      res.status(200).json({ message: "Proyecto eliminado" });
    } catch (error) {
      next(error);
    }
  }
}