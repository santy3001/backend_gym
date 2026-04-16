import bcrypt from "bcrypt";
import { UsersRepository } from "./users.repository";

export class UsersService {
  constructor(private readonly usersRepository = new UsersRepository()) {}

  async getAllUsers() {
    return await this.usersRepository.findAll();
  }

  async getUserById(id: string) {
    return await this.usersRepository.findById(id);
  }

  async registerUser(data: {
    name: string;
    email: string;
    password: string;
    role?: "user" | "admin";
  }) {
    const exists = await this.usersRepository.findByEmail(data.email);
    if (exists) {
      throw new Error("El usuario ya existe");
    }

    const hashedPassword = await bcrypt.hash(data.password, 10);

    return await this.usersRepository.create({
      name: data.name,
      email: data.email,
      password: hashedPassword,
      role: data.role ?? "user"
    });
  }

  async updateUser(
    id: string,
    data: Partial<{
      name: string;
      email: string;
      password: string;
      role: "user" | "admin";
    }>
  ) {
    if (data.password) {
      data.password = await bcrypt.hash(data.password, 10);
    }

    return await this.usersRepository.updateById(id, data);
  }

  async deleteUser(id: string) {
    return await this.usersRepository.deleteById(id);
  }
}
