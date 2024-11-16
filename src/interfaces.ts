import { Gender, Preferences } from './enums';

export interface IFormInput {
  name: string;
  email: string;
  gender: Gender;
  password: string;
  confirmPassword: string;
  preferences?: Preferences[];
}

export interface IOptions {
  label: string;
  value: string;
}
