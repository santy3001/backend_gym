import { Request, Response } from "express";

export const getPlans = (_req: Request, res: Response) => {
  res.json([
    {
      "_id": "67f8b1234567890abcdef123",
      "name": "Básico Mensual", 
      "price": 150000,
      "duration": "30 días",
      "features": ["Acceso gym", "2 clases/semana"]
    },
    {
      "_id": "67f8b1234567890abcdef124",
      "name": "Premium Semanal",
      "price": 80000,
      "duration": "7 días", 
      "features": ["Gym 24/7", "Clases ilimitadas"]
    }
  ]);
};