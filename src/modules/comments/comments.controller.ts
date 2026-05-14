import { Request, Response } from "express";

export const getComments = (_req: Request, res: Response) => {
  res.json([
    {
      "_id": "67f8b1234567890abcdef678",
      "classId": "67f8b1234567890abcdef456",
      "className": "Pierna Básica",
      "memberName": "Juan Pérez",
      "comment": "Excelente rutina para principiantes",
      "rating": 5,
      "date": "2026-05-05"
    }
  ]);
};