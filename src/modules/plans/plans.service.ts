import { PlanRepository } from "./plans.repository";
import { Plan } from "./plans.model";

export class PlanService {
  private repository = new PlanRepository();

  async getAll(): Promise<Plan[]> {
    return await this.repository.findAll();
  }

  async getById(id: string): Promise<Plan> {
    const plan = await this.repository.findById(id);
    if (!plan) throw new Error("Plan no encontrado");
    return plan;
  }

  async create(data: Partial<Plan>): Promise<Plan> {
    return await this.repository.create(data);
  }

  async update(id: string, data: Partial<Plan>): Promise<Plan> {
    const plan = await this.repository.update(id, data);
    if (!plan) throw new Error("Plan no encontrado");
    return plan;
  }

  async delete(id: string): Promise<{ message: string }> {
    const plan = await this.repository.delete(id);
    if (!plan) throw new Error("Plan no encontrado");
    return { message: "Plan eliminado correctamente" };
  }
}