import { PetInterface } from 'interfaces/pet';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface FileInterface {
  id?: string;
  file_name: string;
  file_size: number;
  file_type: string;
  pet_id: string;
  user_id: string;
  created_at?: any;
  updated_at?: any;

  pet?: PetInterface;
  user?: UserInterface;
  _count?: {};
}

export interface FileGetQueryInterface extends GetQueryInterface {
  id?: string;
  file_name?: string;
  file_type?: string;
  pet_id?: string;
  user_id?: string;
}
