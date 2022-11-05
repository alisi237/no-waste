export interface ItemStorage {
    name: string;
  }

  export interface Item {
    id: number;
    name: string;
    date: Date;
    amount: number;
    storage: ItemStorage;
  }

