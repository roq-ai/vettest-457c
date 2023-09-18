import { FileInterface } from 'interfaces/file';
import { NoteInterface } from 'interfaces/note';
import { CustomerInterface } from 'interfaces/customer';
import { GetQueryInterface } from 'interfaces';

export interface PetInterface {
  id?: string;
  name: string;
  species: string;
  breed: string;
  age: number;
  weight: number;
  customer_id: string;
  created_at?: any;
  updated_at?: any;
  file?: FileInterface[];
  note?: NoteInterface[];
  customer?: CustomerInterface;
  _count?: {
    file?: number;
    note?: number;
  };
}

export interface PetGetQueryInterface extends GetQueryInterface {
  id?: string;
  name?: string;
  species?: string;
  breed?: string;
  customer_id?: string;
}
