import { Router } from "express";
import { usersController } from "../controllers/users.controller";
import { userExistsMiddleware } from "../middlewares/users/userExists.middleware";
import { emailAlreadyExistsMiddleware } from "../middlewares/users/emailAlreadyExists.middleware";
const userRoutes = Router();

userRoutes.post("", emailAlreadyExistsMiddleware, usersController.create);

userRoutes.get("", usersController.listAll);

userRoutes.get("/:id", userExistsMiddleware, usersController.listOne);

userRoutes.patch(
  "/:id",
  userExistsMiddleware,
  emailAlreadyExistsMiddleware,
  usersController.update
);

userRoutes.delete("/:id", userExistsMiddleware, usersController.remove);

export { userRoutes };
