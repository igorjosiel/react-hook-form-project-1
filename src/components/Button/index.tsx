import { IButtonProps } from './interface';

const Button: React.FC<IButtonProps> = ({ disabled, value, ariaLabel, className }) => {
  return (
    <input
      type="submit"
      disabled={disabled}
      value={value}
      aria-label={ariaLabel}
      className={className ?? `${
        disabled ? "bg-gray-400 cursor-not-allowed" : "bg-blue-500 hover:bg-blue-700 cursor-pointer"
      } text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline`}
    />
  );
}

export default Button;
