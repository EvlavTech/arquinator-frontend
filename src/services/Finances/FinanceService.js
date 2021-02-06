import BaseService from '../BaseService';
import api from '../api';

class FinanceService extends BaseService {
  constructor() {
    super('projects_by_company_id');
  }

  async getAll(companyId) {
    const result = await api.get(`${this.uri}/${companyId}`);
    return result;
  }
}

export default new FinanceService();
