import UserModel, { IUser } from "./user.model";

export class UsersRepository {
  async findAll() {
    return await UserModel.find();
  }

  async findById(id: string) {
    return await UserModel.findById(id);
  }

  async findByEmail(email: string) {
    return await UserModel.findOne({ email });
  }

  async create(data: IUser) {
    return await UserModel.create(data);
  }

  async updateById(
    id: string,
    data: Partial<Pick<IUser, "name" | "email" | "password" | "role">>
  ) {
    return await UserModel.findByIdAndUpdate(id, data, { new: true });
  }

  async deleteById(id: string) {
    return await UserModel.findByIdAndDelete(id);
  }
}