export class ClassRepository {
  async findAll(): Promise<any[]> {
    return [{
      _id: '67f8b1234567890abcdef124',
      name: 'Pierna Básica',
      description: 'Rutina principiante',
      duration: 45,
      difficulty: 'principiante'
    }];
  }

  async findById(id: string): Promise<any | null> {
    return null;
  }

  async create(data: any): Promise<any> {
    return { id: Date.now().toString(), ...data };
  }

  async update(id: string, data: any): Promise<any | null> {
    return null;
  }

  async delete(id: string): Promise<any | null> {
    return null;
  }
}