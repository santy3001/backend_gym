/**
 * @swagger
 * /api/v1/classes:
 *   get: { summary: Listar clases, tags: [Classes], security: [{ bearerAuth: [] }] }
 *   post:
 *     summary: Crear clase
 *     tags: [Classes]
 *     security: [{ bearerAuth: [] }]
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             properties:
 *               name: { type: string, example: "Zumba" }
 *               instructor: { type: string }
 *               schedule: { type: string }
 *     responses: { 201: { description: Clase creada } }
 */
import { Router } from "express";
import { getClasses } from "./classes.controller";

const router = Router();
router.get("/", getClasses);

export default router;