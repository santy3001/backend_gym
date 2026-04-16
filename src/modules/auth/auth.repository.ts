import User from "../users/user.model";

export class AuthRepository {
  async findByEmail(email: string) {
    return await User.findOne({ email });
  }

  async create(data: {
    name: string;
    email: string;  
    password: string;
    role: string;
  }) {
    return await User.create(data);
  }
}