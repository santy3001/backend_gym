import { ProjectsRepository } from "./projects.repository";
import { IProject } from "./projects.model";

export class ProjectsService {
  private readonly repository = new ProjectsRepository();

  async getAllProjects() {
    return await this.repository.findAll();
  }

  async getProjectById(projectId: string) {
    return await this.repository.findById(projectId);
  }

  async createProject(data: IProject) {
    return await this.repository.create(data);
  }

  async updateProject(
    projectId: string,
    data: Partial<Pick<IProject, "title" | "description" | "status">>
  ) {
    return await this.repository.updateById(projectId, data);
  }

  async deleteProject(projectId: string) {
    return await this.repository.deleteById(projectId);
  }
}