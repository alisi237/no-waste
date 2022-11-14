export interface ItemStorage {
  id: string;
  name: string;
}

export interface Item {
  id: string;
  name: string;
  date: Date;
  amount: number;
  storage: ItemStorage['id'];
}

