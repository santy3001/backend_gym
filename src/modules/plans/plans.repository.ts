import { PlanModel, Plan } from "./plans.model";

export class PlanRepository {
  async findAll(): Promise<Plan[]> {
    return await PlanModel.find();
  }

  async findById(id: string): Promise<Plan | null> {
    return await PlanModel.findById(id);
  }

  async create(data: Partial<Plan>): Promise<Plan> {
    const plan = new PlanModel(data);
    return await plan.save();
  }

  async update(id: string, data: Partial<Plan>): Promise<Plan | null> {
    return await PlanModel.findByIdAndUpdate(id, data, { new: true });
  }

  async delete(id: string): Promise<Plan | null> {
    return await PlanModel.findByIdAndDelete(id);
  }
}