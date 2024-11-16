import { useForm, SubmitHandler } from 'react-hook-form';

enum IGender {
  female = 'female',
  male = 'male',
  other = 'other',
}

enum IPreferences {
  religion = 'religion',
  health = 'health',
  books = 'books',
  pets = 'pets',
}

interface IFormInput {
  name: string;
  email: string;
  gender: IGender;
  password: string;
  confirmPassword: string;
  preferences?: IPreferences[];
}

interface IOptions {
  label: string;
  value: string;
}

const preferencesOptions: IOptions[] = [
  { label: 'Religião', value: IPreferences.religion },
  { label: 'Saúde', value: IPreferences.health },
  { label: 'Livros', value: IPreferences.books },
  { label: 'Pets', value: IPreferences.pets },
];

const gendersOptions: IOptions[] = [
  { label: "Home", value: IGender.male },
  { label: "Mulher", value: IGender.female },
  { label: "Outro", value: IGender.other },
];

function App() {
  const { register, handleSubmit, watch, formState: { errors } } = useForm<IFormInput>();

  const onSubmit: SubmitHandler<IFormInput> = (data) => console.log('data: ', data);

  // Verifica se as senhas coincidem
  const password = watch("password");

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="name">Nome:</label>
      <input
        id="name"
        type="text"
        placeholder="Digite o seu nome"
        {...register("name", { required: "Nome é obrigatório!" })}
      />
      {errors.name && <span>{errors.name.message}</span>}

      <label htmlFor="email">E-mail:</label>
      <input
        id="email"
        type="email"
        placeholder="Digite o seu e-mail"
        {...register("email", {
          required: true,
          pattern: {
            value: /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/,
            message: "E-mail inválido!",
          }
        })}
      />
      {errors.email && <span>{errors.email.message}</span>}

      <label htmlFor="gender">Selecione o gênero:</label>
      <select id="gender" {...register("gender", { required: "Gênero é obrigatório!" })}>
        <option value="">Selecione</option>

        {gendersOptions.map(gender => {
          return <option key={gender.value} value={gender.value}>{gender.label}</option>
        })}
      </select>
      {errors.gender && <span>{errors.gender.message}</span>}

      <fieldset>
        <legend>Selecione as suas preferências:</legend>
        {preferencesOptions.map(preference => {
          return (
            <div key={preference.value}>
              <label htmlFor={preference.value}>{preference.label}</label>
              <input
                id={preference.value}
                type="checkbox"
                value={preference.value}
                {...register("preferences")}
              />
            </div>
          );
        })}
      </fieldset>

      <label htmlFor="password">Senha:</label>
      <input
        id="password"
        type="password"
        placeholder="Digite a senha"
        {...register("password", {
          required: "Senha é obrigatória!",
          minLength: {
            value: 6,
            message: "A senha deve ter no mínimo 6 caracteres!",
          },
        })}
      />
      {errors.password && <span>{errors.password.message}</span>}

      <label htmlFor="confirmPassword">Confirmar Senha:</label>
      <input
        id="confirmPassword"
        type="password"
        placeholder="Confirme a senha"
        {...register("confirmPassword", {
          required: "Confirmação de senha é obrigatória!",
          validate: (value) => value === password || "As senhas não coincidem!",
        })}
      />
      {errors.confirmPassword && <span>{errors.confirmPassword.message}</span>}
      
      <input type="submit" />
    </form>
  );
}

export default App;
