import TaskModel, { ITask } from "./tasks.model";

export class TasksRepository {
  async findAll() {
    return await TaskModel.find();
  }

  async findById(id: string) {
    return await TaskModel.findById(id);
  }

  async create(data: ITask) {
    return await TaskModel.create(data);
  }

  async updateById(
    id: string,
    data: Partial<Pick<ITask, "title" | "description" | "status">>
  ) {
    return await TaskModel.findByIdAndUpdate(id, data, { new: true });
  }

  async deleteById(id: string) {
    return await TaskModel.findByIdAndDelete(id);
  }
}