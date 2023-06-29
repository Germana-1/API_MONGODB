import { AppError } from "../errors/error";
import { IUserRequest, IUserUpdate } from "../interfaces";
import { User } from "../models/users.model";

class UsersService {
  async create({ name, email, password }: IUserRequest) {
    const newUser = await User.create({ name, email, password });
    return newUser;
  }

  async listAll() {
    const users = await User.find({});
    return users;
  }

  async listOne(id: string) {
    const user = await User.findById(id);
    return user;
  }

  async update(id: string, data: IUserUpdate) {
    await User.updateOne({ _id: id, ...data });
    const updatedUser = await User.findById({ _id: id });
    return updatedUser;
  }

  async remove(id: string) {
    await User.findByIdAndDelete({ _id: id });
  }
}

const usersService = new UsersService();

export { usersService };
