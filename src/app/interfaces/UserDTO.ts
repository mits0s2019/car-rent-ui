import {BaseDTO} from './BaseDTO';

export interface UserDTO extends BaseDTO {
  id?: number;
  username: string;
  password?: string;
  confirmationPassword?: string;
  email?: string;
  firstName: string;
  lastName: string;
  age: string;
  roles?: string[];
  privileges?: string[];
}
