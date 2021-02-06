import api from 'services/api';

export const getAllTasks = async () => {
  const response = await api.get('/tasks');
  const tasks = response.data;
  return tasks;
};

export const postTask = async (task) => {
  const createdTask = await api.post('/task', task);
  return createdTask;
};
