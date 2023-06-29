import { Request, Response } from "express";
import { usersService } from "../services/users.service";

class UsersController {
  async create(req: Request, res: Response) {
    const { name, email, password } = req.body;
    const newUser = await usersService.create({ name, email, password });
    return res.status(201).json(newUser);
  }

  async listAll(req: Request, res: Response) {
    const users = await usersService.listAll();
    return res.status(200).json(users);
  }

  async listOne(req: Request, res: Response) {
    const id: string = req.params.id;
    const user = await usersService.listOne(id);
    return res.status(200).json(user);
  }

  async update(req: Request, res: Response) {
    const id: string = req.params.id;
    const updatedUser = await usersService.update(id, req.body);
    return res.status(200).json(updatedUser);
  }

  async remove(req: Request, res: Response) {
    const id: string = req.params.id;
    await usersService.remove(id);
    return res.status(204).json({});
  }
}

const usersController = new UsersController();

export { usersController };
