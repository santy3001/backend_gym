import { Router } from "express";
import { ProjectsController } from "./projects.controller";
import { authMiddleware } from "../../middlewares/auth.middleware";

const router = Router();
const projectsController = new ProjectsController();

router.get("/", authMiddleware, (req, res, next) =>
  projectsController.getAll(req, res, next)
);

router.get("/:id", authMiddleware, (req, res, next) =>
  projectsController.getById(req, res, next)
);

router.post("/", authMiddleware, (req, res, next) =>
  projectsController.create(req, res, next)
);

router.put("/:id", authMiddleware, (req, res, next) =>
  projectsController.update(req, res, next)
);

router.delete("/:id", authMiddleware, (req, res, next) =>
  projectsController.remove(req, res, next)
);

export default router;