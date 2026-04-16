import { Request, Response, NextFunction } from "express";
import { PlanService } from "./plans.service";

type IdParams = { id: string };

export class PlanController {
  private service = new PlanService();

  create = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const result = await this.service.create(req.body);
      res.status(201).json(result);
    } catch (error) {
      next(error);
    }
  };

  getAll = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const result = await this.service.getAll();
      res.status(200).json(result);
    } catch (error) {
      next(error);
    }
  };

  getById = async (
    req: Request<IdParams>,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const result = await this.service.getById(req.params.id);
      res.status(200).json(result);
    } catch (error) {
      next(error);
    }
  };

  update = async (
    req: Request<IdParams>,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const result = await this.service.update(req.params.id, req.body);
      res.status(200).json(result);
    } catch (error) {
      next(error);
    }
  };

  deleteById = async (
    req: Request<IdParams>,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const result = await this.service.delete(req.params.id);
      res.status(200).json(result);
    } catch (error) {
      next(error);
    }
  };
}