import { Request, Response, NextFunction } from "express";
import { User } from "../../models/users.model";
import { AppError } from "../../errors/error";

export const userExistsMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const user = await User.findById(req.params.id);
  if (!user) {
    throw new AppError("User not found!", 404);
  }

  return next();
};
