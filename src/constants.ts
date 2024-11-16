import { Gender, Preferences } from './enums';
import { IOptions } from './interfaces';

const { Male, Female, Other } = Gender;
const { Religion, Health, Books, Pets } = Preferences;

export const gendersOptions: IOptions[] = [
  { label: "Homem", value: Male },
  { label: "Mulher", value: Female },
  { label: "Outro", value: Other },
];

export const preferencesOptions: IOptions[] = [
  { label: "Religião", value: Religion },
  { label: "Saúde", value: Health },
  { label: "Livros", value: Books },
  { label: "Pets", value: Pets },
];
