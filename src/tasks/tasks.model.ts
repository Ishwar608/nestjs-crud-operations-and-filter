export class Task {
  id: string;
  title: string;
  description: string;
  status: boolean;
}

export enum TaskStatus {
  OPEN = 'OPEN',
  IN_PROGRESS = 'IN_PROGRESS',
  DONE = 'DONE',
}