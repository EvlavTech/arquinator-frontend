import BaseService from 'services/BaseService';
import api from 'services/api';

class TaskService extends BaseService {
  constructor() {
    super('tasks');
  }

  async getAll() {
    const response = await api.get(`${this.uri}`);
    const tasks = response.data;
    return tasks;
  }
}

export default new TaskService();
