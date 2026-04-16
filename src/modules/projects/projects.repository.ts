import ProjectModel, { IProject } from "./projects.model";

export class ProjectsRepository {
  async findAll() {
    return await ProjectModel.find();
  }

  async findById(id: string) {
    return await ProjectModel.findById(id);
  }

  async create(data: IProject) {
    return await ProjectModel.create(data);
  }

  async updateById(
    id: string,
    data: Partial<Pick<IProject, "title" | "description" | "status">>
  ) {
    return await ProjectModel.findByIdAndUpdate(id, data, { new: true });
  }

  async deleteById(id: string) {
    return await ProjectModel.findByIdAndDelete(id);
  }
}