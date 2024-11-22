import { ISpanErrorProps } from './interface';

const SpanError: React.FC<ISpanErrorProps> = ({ id, className, message }) => {
  return (
    <span
      id={id}
      role="alert"
      aria-live="assertive"
      className={className ?? "text-red-500 text-sm font-bold"}
    >
      {message}
    </span>
  );
}

export default SpanError;
