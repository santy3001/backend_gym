import { Request, Response } from "express";

export const getPayments = (_req: Request, res: Response) => {
  res.json([{ memberName: "Juan Pérez", amount: 150000, status: "pagado" }]);
};