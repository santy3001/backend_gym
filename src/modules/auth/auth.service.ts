import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { AuthRepository } from "./auth.repository";

export class AuthService {
  private readonly authRepository = new AuthRepository();

  async register(data: { name: string; email: string; password: string }) {
    const existingUser = await this.authRepository.findByEmail(data.email);

    if (existingUser) {
      throw new Error("El usuario ya existe");
    }

    const hashedPassword = await bcrypt.hash(data.password, 10);

    return await this.authRepository.create({
      name: data.name,
      email: data.email,
      password: hashedPassword,
      role: "user"
    });
  }

  async login(data: { email: string; password: string }) {
    const user = await this.authRepository.findByEmail(data.email);

    if (!user) {
      throw new Error("Credenciales inválidas");
    }

    const validPassword = await bcrypt.compare(data.password, user.password);

    if (!validPassword) {
      throw new Error("Credenciales inválidas");
    }

    const secret = process.env.JWT_SECRET;
    if (!secret) {
      throw new Error("JWT_SECRET no está definido");
    }

    const token = jwt.sign(
      { id: user._id, email: user.email, role: user.role },
      secret,
      { expiresIn: "10h" }
    );

    return {
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role
      },
      token
    };
  }
}