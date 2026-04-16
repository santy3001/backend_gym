import { Router } from "express";
import { TasksController } from "./tasks.controller";
import { authMiddleware } from "../../middlewares/auth.middleware";

const router = Router();
const tasksController = new TasksController();

router.get("/", authMiddleware, (req, res, next) =>
  tasksController.getAll(req, res, next)
);

router.get("/:id", authMiddleware, (req, res, next) =>
  tasksController.getById(req, res, next)
);

router.post("/", authMiddleware, (req, res, next) =>
  tasksController.create(req, res, next)
);

router.put("/:id", authMiddleware, (req, res, next) =>
  tasksController.update(req, res, next)
);

router.delete("/:id", authMiddleware, (req, res, next) =>
  tasksController.remove(req, res, next)
);

export default router;