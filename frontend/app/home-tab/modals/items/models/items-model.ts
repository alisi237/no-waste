import { ItemStorage } from "../../inventory/models/storage-model";

export interface Item {
    id: number;
    name: string;
    date: Date;
    amount: number;
    storage: ItemStorage;
  }

