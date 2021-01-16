export interface TaskModel {
  id: string;
  name: string;
  description: string;
  clientId: number;
  startDate: Date;
  endDate: Date;
  // Somente para mockup
  projectName: string;
  responsible: string;
}
