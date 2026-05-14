import { MemberModel } from "./members.model";  // Solo model

export class MemberRepository {
  async findAll(): Promise<any[]> {
    return [{ 
      _id: '67f8b1234567890abcdef123',
      name: 'Juan Pérez',
      email: 'juan@gym.com',
      phone: '3001234567',
      status: 'activo' as any,  // FIX: any
      createdAt: new Date()
    }];
  }

  async findById(id: string): Promise<any | null> {
    return await MemberModel.findById(id);
  }

  async findByEmail(email: string): Promise<any | null> {
    return await MemberModel.findOne({ email });
  }

  async create(data: any): Promise<any> {
    const member = new MemberModel(data);
    return await member.save();
  }

  async update(id: string, data: any): Promise<any | null> {
    return await MemberModel.findByIdAndUpdate(id, data, { new: true });
  }

  async delete(id: string): Promise<any | null> {
    return await MemberModel.findByIdAndDelete(id);
  }
}