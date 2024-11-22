import { ITitleProps } from './interface';

const Title: React.FC<ITitleProps> = ({ text, className }) => {
  return (
    <h1 className={className ?? "text-center mb-3 text-xl text-blue-950 font-bold"}>
      {text}
    </h1>
  );
}

export default Title;
