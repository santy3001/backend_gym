import { Request, Response } from "express";

export const getClasses = (_req: Request, res: Response) => {
  res.json([
    {
      "_id": "67f8b1234567890abcdef456",
      "name": "Pierna Básica",
      "duration": 45,
      "level": "principiante",
      "exercises": ["Sentadilla", "Prensa", "Extension"]
    }
  ]);
};