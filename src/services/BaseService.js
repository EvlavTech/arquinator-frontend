import api from './api';

class BaseService {
  constructor(uri) {
    this.uri = uri;
  }

  async getAll() {
    const result = await api.get(this.uri);
    return result;
  }
}

export default BaseService;
