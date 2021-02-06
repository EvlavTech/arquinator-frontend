import BaseService from '../BaseService';
import api from '../api';

class TeamService extends BaseService {
  constructor() {
    super('users');
  }

  async getAll(companyId) {
    const result = await api.get(`${this.uri}`, {
      params: {
        company_id: companyId,
      },
    });

    return result;
  }
}

export default new TeamService();
