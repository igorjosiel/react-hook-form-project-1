import { useForm, SubmitHandler } from 'react-hook-form';
import { IFormInput } from './interfaces';
import { gendersOptions, preferencesOptions } from './constants';

function App() {
  const { register, handleSubmit, watch, formState: { errors } } = useForm<IFormInput>();

  const onSubmit: SubmitHandler<IFormInput> = (data) => console.log('data: ', data);

  const password = watch("password");

  return (
    <div className="w-full max-w-sm">
      <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">Nome:</label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="name"
            type="text"
            placeholder="Digite o seu nome"
            aria-invalid={errors.name ? "true" : "false"}
            {...register("name", { required: "Nome é obrigatório!" })}
          />

          {errors.name && <span>{errors.name.message}</span>}
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">E-mail:</label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="email"
            placeholder="Digite o seu e-mail"
            aria-invalid={errors.email ? "true" : "false"}
            {...register("email", {
              required: true,
              pattern: {
                value: /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/,
                message: "E-mail inválido!",
              }
            })}
          />

          {errors.email && <span>{errors.email.message}</span>}
        </div>

        <label htmlFor="gender">Gênero:</label>
        <select
          id="gender"
          aria-invalid={errors.gender ? "true" : "false"}
          {...register("gender", { required: "Gênero é obrigatório!" })}>
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
          aria-invalid={errors.password ? "true" : "false"}
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
          aria-invalid={errors.confirmPassword ? "true" : "false"}
          {...register("confirmPassword", {
            required: "Confirmação de senha é obrigatória!",
            validate: (value) => value === password || "As senhas não coincidem!",
          })}
        />
        {errors.confirmPassword && <span>{errors.confirmPassword.message}</span>}
      
        <input type="submit" />
      </form>
    </div>
  );
}

export default App;
