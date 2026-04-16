import { Router } from "express";
import { CommentsController } from "./comments.controller";
import { authMiddleware } from "../../middlewares/auth.middleware";

const router = Router();
const commentsController = new CommentsController();

router.get("/", authMiddleware, (req, res, next) =>
  commentsController.getAll(req, res, next)
);

router.get("/:id", authMiddleware, (req, res, next) =>
  commentsController.getById(req, res, next)
);

router.post("/", authMiddleware, (req, res, next) =>
  commentsController.create(req, res, next)
);

router.put("/:id", authMiddleware, (req, res, next) =>
  commentsController.update(req, res, next)
);

router.delete("/:id", authMiddleware, (req, res, next) =>
  commentsController.remove(req, res, next)
);

export default router;