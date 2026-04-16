import { MemberRepository } from "./members.repository";
import { Member } from "./members.model";

export class MemberService {
  private repository = new MemberRepository();

  async getAll(): Promise<Member[]> {
    return await this.repository.findAll();
  }

  async getById(id: string): Promise<Member> {
    const member = await this.repository.findById(id);
    if (!member) throw new Error("Miembro no encontrado");
    return member;
  }

  async create(data: Partial<Member>): Promise<Member> {
    const exists = await this.repository.findByEmail(data.email as string);
    if (exists) throw new Error("Email ya registrado");
    return await this.repository.create(data);
  }

  async update(id: string, data: Partial<Member>): Promise<Member> {
    const member = await this.repository.update(id, data);
    if (!member) throw new Error("Miembro no encontrado");
    return member;
  }

  async delete(id: string): Promise<{ message: string }> {
    const member = await this.repository.delete(id);
    if (!member) throw new Error("Miembro no encontrado");
    return { message: "Miembro eliminado correctamente" };
  }
}