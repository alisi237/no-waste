export interface ItemStorage {
  name: string;
}

export interface Item {
  id: string;
  name: string;
  date: Date;
  amount: number;
  storage: string;
}

