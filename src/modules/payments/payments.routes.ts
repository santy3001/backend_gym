import { Router } from "express";
import { getPayments } from "./payments.controller";

const router = Router();

/**
 * @swagger
 * /api/v1/payments:
 *   get:
 *     summary: Listar pagos
 *     tags: [Payments]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Lista de pagos
 *       401:
 *         description: No autorizado
 *   post:
 *     summary: Registrar pago
 *     tags: [Payments]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - memberId
 *               - amount
 *               - plan
 *             properties:
 *               memberId:
 *                 type: string
 *                 example: "66a1f2d8c1a9b2c3d4e5f678"
 *               amount:
 *                 type: number
 *                 example: 50000
 *               plan:
 *                 type: string
 *                 example: Mensual
 *     responses:
 *       201:
 *         description: Pago registrado
 *       400:
 *         description: Datos inválidos
 */
router.get("/", getPayments);

export default router;