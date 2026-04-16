import { TasksRepository } from "./tasks.repository";
import { ITask } from "./tasks.model";

export class TasksService {
  private readonly repository = new TasksRepository();

  async getAllTasks() {
    return await this.repository.findAll();
  }

  async getTaskById(taskId: string) {
    return await this.repository.findById(taskId);
  }

  async createTask(data: ITask) {
    return await this.repository.create(data);
  }

  async updateTask(
    taskId: string,
    data: Partial<Pick<ITask, "title" | "description" | "status">>
  ) {
    return await this.repository.updateById(taskId, data);
  }

  async deleteTask(taskId: string) {
    return await this.repository.deleteById(taskId);
  }
}