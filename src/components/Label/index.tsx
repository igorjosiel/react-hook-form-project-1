import { ILabelProps } from './interface';

const Label: React.FC<ILabelProps> = ({ text, htmlFor, className }) => {
  return (
    <label
      htmlFor={htmlFor}
      className={className ?? "block text-gray-700 text-sm font-bold mb-2"}
    >
      {text}
    </label>
  );
}

export default Label;
