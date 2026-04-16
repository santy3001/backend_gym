import { MemberModel, Member } from "./members.model";

export class MemberRepository {
  async findAll(): Promise<Member[]> {
    return await MemberModel.find();
  }

  async findById(id: string): Promise<Member | null> {
    return await MemberModel.findById(id);
  }

  async findByEmail(email: string): Promise<Member | null> {
    return await MemberModel.findOne({ email });
  }

  async create(data: Partial<Member>): Promise<Member> {
    const member = new MemberModel(data);
    return await member.save();
  }

  async update(id: string, data: Partial<Member>): Promise<Member | null> {
    return await MemberModel.findByIdAndUpdate(id, data, { new: true });
  }

  async delete(id: string): Promise<Member | null> {
    return await MemberModel.findByIdAndDelete(id);
  }
}