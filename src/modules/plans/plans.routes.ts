import { Router } from "express";
import { getPlans } from "./plans.controller";

const router = Router();

/**
 * @swagger
 * /api/v1/plans:
 *   get:
 *     summary: Listar planes
 *     tags: [Plans]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Lista de planes
 *       401:
 *         description: No autorizado
 */
router.get("/", getPlans);

export default router;