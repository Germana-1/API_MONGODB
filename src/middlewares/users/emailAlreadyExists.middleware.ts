import { Request, Response, NextFunction } from "express";
import { User } from "../../models/users.model";
import { AppError } from "../../errors/error";

export const emailAlreadyExistsMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (req.body.email) {
    const user = await User.findOne({ email: req.body.email });

    if (user) {
      throw new AppError("Email Already Exists", 409);
    }
  }

  return next();
};
