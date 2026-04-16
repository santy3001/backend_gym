import { Router } from "express";
import { MemberController } from "./members.controller";

const router = Router();
const controller = new MemberController();

router.post("/", (req, res, next) => controller.create(req, res, next));
router.get("/", (req, res, next) => controller.getAll(req, res, next));
router.get("/:id", (req, res, next) => controller.getById(req, res, next));
router.put("/:id", (req, res, next) => controller.update(req, res, next));
router.delete("/:id", (req, res, next) => controller.deleteById(req, res, next));

export default router;