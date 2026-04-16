import { Request, Response, NextFunction } from "express";
import { UsersService } from "./users.service";

export class UsersController {
  private readonly usersService = new UsersService();

  async getAll(_req: Request, res: Response, next: NextFunction) {
    try {
      const users = await this.usersService.getAllUsers();
      res.status(200).json(users);
    } catch (error) {
      next(error);
    }
  }

  async getById(req: Request, res: Response, next: NextFunction) {
    try {
      const id = String(req.params.id);
      const user = await this.usersService.getUserById(id);

      if (!user) {
        return res.status(404).json({ message: "Usuario no encontrado" });
      }

      res.status(200).json(user);
    } catch (error) {
      next(error);
    }
  }

  async create(req: Request, res: Response, next: NextFunction) {
    try {
      const user = await this.usersService.registerUser(req.body);
      res.status(201).json(user);
    } catch (error) {
      next(error);
    }
  }

  async update(req: Request, res: Response, next: NextFunction) {
    try {
      const id = String(req.params.id);
      const user = await this.usersService.updateUser(id, req.body);

      if (!user) {
        return res.status(404).json({ message: "Usuario no encontrado" });
      }

      res.status(200).json(user);
    } catch (error) {
      next(error);
    }
  }

  async remove(req: Request, res: Response, next: NextFunction) {
    try {
      const id = String(req.params.id);
      const user = await this.usersService.deleteUser(id);

      if (!user) {
        return res.status(404).json({ message: "Usuario no encontrado" });
      }

      res.status(200).json({ message: "Usuario eliminado" });
    } catch (error) {
      next(error);
    }
  }
}