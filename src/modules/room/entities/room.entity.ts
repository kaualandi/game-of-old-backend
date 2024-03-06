export class Room {
  id: number;
  name: string;
  createdBy: number;
  quest: number;
  status: 'open' | 'full' | 'closed';
  createdAt: string;
  updatedAt: string;
}
