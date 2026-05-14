import { Router } from "express";
import { MemberController } from "./members.controller";

const router = Router();
const controller = new MemberController();

/**
 * @swagger
 * /api/v1/members:
 *   get:
 *     summary: Listar miembros
 *     tags: [Members]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Lista miembros
 *   post:
 *     summary: Crear miembro
 *     tags: [Members]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *               - phone
 *             properties:
 *               name:
 *                 type: string
 *                 example: Juan Perez
 *               phone:
 *                 type: string
 *                 example: "3001234567"
 *     responses:
 *       201:
 *         description: Miembro creado
 *
 * /api/v1/members/{id}:
 *   get:
 *     summary: Miembro por ID
 *     tags: [Members]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Miembro encontrado
 *       404:
 *         description: Miembro no encontrado
 *   put:
 *     summary: Actualizar miembro
 *     tags: [Members]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 example: Juan Perez
 *               phone:
 *                 type: string
 *                 example: "3001234567"
 *     responses:
 *       200:
 *         description: Miembro actualizado
 *   delete:
 *     summary: Eliminar miembro
 *     tags: [Members]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Miembro eliminado
 */
router.post("/", (req, res, next) => controller.create(req, res, next));
router.get("/", (req, res, next) => controller.getAll(req, res, next));
router.get("/:id", (req, res, next) => controller.getById(req, res, next));
router.put("/:id", (req, res, next) => controller.update(req, res, next));
router.delete("/:id", (req, res, next) => controller.deleteById(req, res, next));

export default router;