import { Router } from "express";
import { getComments } from "./comments.controller";

const router = Router();

/**
 * @swagger
 * /api/v1/comments:
 *   get:
 *     summary: Listar comentarios
 *     tags: [Comments]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Lista de comentarios
 *       401:
 *         description: No autorizado
 */
router.get("/", getComments);

export default router;