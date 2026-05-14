import { Request, Response } from "express";

export const getMemberships = (_req: Request, res: Response) => {
  res.json([
    {
      "memberName": "Juan Pérez",
      "planName": "Básico Mensual", 
      "startDate": "2026-05-01",
      "status": "activo"
    }
  ]);
};