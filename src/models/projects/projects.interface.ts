export interface Project {
  id: string;
  name: string;
  description: string;
  status: ProjectStatus;
}

export enum ProjectStatus {
  OPEN = 'OPEN',
  IN_PROGRESS = 'IN_PROGRESS',
  DONE = 'DONE',
}
