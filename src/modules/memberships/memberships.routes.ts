import { Router } from "express";
import { getMemberships } from "./memberships.controller";

const router = Router();

/**
 * @swagger
 * /api/v1/memberships:
 *   get:
 *     summary: Listar membresías
 *     tags: [Memberships]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Lista de membresías
 *       401:
 *         description: No autorizado
 */
router.get("/", getMemberships);

export default router;