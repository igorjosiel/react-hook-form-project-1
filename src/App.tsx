import { useForm, SubmitHandler } from 'react-hook-form';

interface IFormInput {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

function App() {
  const { register, handleSubmit } = useForm<IFormInput>();

  const onSubmit: SubmitHandler<IFormInput> = (data) => console.log('data: ', data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>Nome:</label>
      <input type='text' {...register("name")} required />

      <label>E-mail:</label>
      <input type='email' {...register("email")} required />

      <label>Senha:</label>
      <input type='password' {...register("password")} maxLength={6} />

      <label>Confirmar Senha:</label>
      <input type='password' {...register("confirmPassword")} maxLength={6} />
      
      <input type='submit' />
    </form>
  );
}

export default App;
