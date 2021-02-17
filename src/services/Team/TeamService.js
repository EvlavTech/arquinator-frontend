import BaseService from 'services/BaseService';
import api from 'services/api';

class TeamService extends BaseService {
  constructor() {
    super('team');
  }

  async getAll() {
    const response = await api.get(`${this.uri}`);
    const team = response.data;
    return team;
  }
}

export default new TeamService();
