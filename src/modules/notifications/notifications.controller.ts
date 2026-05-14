import { Request, Response } from "express";

export const getNotifications = (_req: Request, res: Response) => {
  res.json([
    {
      "_id": "67f8b1234567890abcdef890",
      "memberId": "67f8b1234567890abcdef123",
      "memberName": "Juan Pérez",
      "title": "Clase Pierna Básica disponible",
      "message": "Tu clase de piernas inicia en 30 min",
      "type": "recordatorio",
      "read": false,
      "date": "2026-05-12T14:00:00Z"
    }
  ]);
};