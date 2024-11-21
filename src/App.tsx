import { useForm, SubmitHandler } from 'react-hook-form';
import { IFormInput } from './interfaces';
import { gendersOptions, preferencesOptions } from './constants';

function App() {
  const { register, handleSubmit, watch, formState: { errors } } = useForm<IFormInput>();

  const onSubmit: SubmitHandler<IFormInput> = (data) => console.log('data: ', data);

  const password = watch("password");

  return (
    <div className="w-full max-w-sm my-6">
      <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit(onSubmit)}>
        <h1 className="text-center mb-3 text-xl text-blue-950 font-bold">Cadastro</h1>

        <div className="mb-3">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">Nome:</label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="name"
            type="text"
            placeholder="Digite o seu nome"
            aria-invalid={errors.name ? "true" : "false"}
            aria-describedby="name-error"
            {...register("name", { required: "Nome é obrigatório!" })}
          />

          {errors.name &&
            <span className="text-red-500 text-sm font-bold" id="name-error" role="alert" aria-live="assertive">{errors.name.message}</span>
          }
        </div>

        <div className="mb-3">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">E-mail:</label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="email"
            placeholder="Digite o seu e-mail"
            aria-invalid={errors.email ? "true" : "false"}
            aria-describedby="email-error"
            {...register("email", {
              required: "E-mail é obrigatório!",
              pattern: {
                value: /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/,
                message: "E-mail inválido!",
              }
            })}
          />

          {errors.email &&
            <span className="text-red-500 text-sm font-bold" id="email-error" role="alert" aria-live="assertive">{errors.email.message}</span>
          }
        </div>

        <div className="mb-3">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="gender">Gênero:</label>
          <select
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="gender"
            aria-invalid={errors.gender ? "true" : "false"}
            aria-describedby="gender-error"
            {...register("gender", { required: "Gênero é obrigatório!" })}>
            <option value="">Selecione</option>

            {gendersOptions.map(gender => {
              return <option key={gender.value} value={gender.value}>{gender.label}</option>
            })}
          </select>

          {errors.gender &&
            <span className="text-red-500 text-sm font-bold" id="gender-error" role="alert" aria-live="assertive">{errors.gender.message}</span>
          }
        </div>

        <fieldset className="mb-3">
          <legend className="block text-gray-700 text-sm font-bold mb-2">Preferências:</legend>

          <div className="flex gap-5 bg-blue-50 border rounded p-2 shadow leading-tight">
            {preferencesOptions.map(preference => {
              return (
                <div key={preference.value} className="mb-1">
                  <label className="cursor-pointer" htmlFor={preference.value}>{preference.label}</label>
                  <input
                    className="ml-1 cursor-pointer"
                    id={preference.value}
                    type="checkbox"
                    value={preference.value}
                    {...register("preferences")}
                  />
                </div>
              );
            })}
          </div>
        </fieldset>

        <div className="mb-3">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">Senha:</label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            type="password"
            placeholder="Digite a senha"
            aria-invalid={errors.password ? "true" : "false"}
            aria-describedby="password-error"
            {...register("password", {
              required: "Senha é obrigatória!",
              minLength: {
                value: 6,
                message: "A senha deve ter no mínimo 6 caracteres!",
              },
            })}
          />

          {errors.password &&
            <span className="text-red-500 text-sm font-bold" id="password-error" role="alert" aria-live="assertive">{errors.password.message}</span>
          }
        </div>

        <div className="mb-3">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="confirmPassword">Confirmar Senha:</label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="confirmPassword"
            type="password"
            placeholder="Confirme a senha"
            aria-invalid={errors.confirmPassword ? "true" : "false"}
            aria-describedby="confirm-password-error"
            {...register("confirmPassword", {
              required: "Confirmação de senha é obrigatória!",
              validate: (value) => value === password || "As senhas não coincidem!",
            })}
          />

          {errors.confirmPassword &&
            <span className="text-red-500 text-sm font-bold" id="confirm-password-error" role="alert" aria-live="assertive">{errors.confirmPassword.message}</span>
          }
        </div>

        <div className="flex flex-row justify-end mt-5">
          <input
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline cursor-pointer"
            type="submit"
            aria-label="Enviar formulário de cadastro"
          />
        </div>
      </form>
    </div>
  );
}

export default App;
