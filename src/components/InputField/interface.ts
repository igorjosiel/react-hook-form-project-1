import { FieldError, UseFormRegisterReturn } from 'react-hook-form';

export interface IInputFieldProps {
  id: string;
  register: UseFormRegisterReturn;
  type?: string;
  error?: FieldError;
  placeholder?: string;
  className?: string;
  ariaDescribedby?: string;
}
