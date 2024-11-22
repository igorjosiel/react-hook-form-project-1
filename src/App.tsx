import { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { Button, InputField, Label, SpanError, Title } from './components';
import { IFormInput } from './interfaces';
import { gendersOptions, preferencesOptions } from './constants';

function App() {
  const [isSubmitting, setIsSubimitting] = useState(false);

  const { register, handleSubmit, watch, formState: { errors } } = useForm<IFormInput>();

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    setIsSubimitting(true);

    console.log('data: ', data);

    setTimeout(() => setIsSubimitting(false), 2000);
  }

  const password = watch("password");

  return (
    <div className="w-full max-w-sm my-6">
      <form onSubmit={handleSubmit(onSubmit)} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <Title text="Cadastro" />

        <div className="mb-3">
          <Label htmlFor="name" text="Nome:" />
          <InputField
            id="name"
            type="text"
            register={register("name", { required: "Nome é obrigatório!" })}
            placeholder="Digite o seu nome"
            error={errors.name}
            ariaDescribedby="name-error"
          />
          
          {errors.name && <SpanError id="name-error" message={errors.name.message} />}
        </div>

        <div className="mb-3">
          <Label htmlFor="email" text="E-mail:" />
          <InputField
            id="email"
            type="email"
            placeholder="Digite o seu e-mail"
            error={errors.email}
            ariaDescribedby="email-error"
            register={register("email", {
              required: "E-mail é obrigatório!",
              pattern: {
                value: /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/,
                message: "E-mail inválido!",
              }
            })}
          />

          {errors.email && <SpanError id="email-error" message={errors.email.message} />}
        </div>

        <div className="mb-3">
          <Label htmlFor="gender" text="Gênero:" />
          <select
            id="gender"
            aria-invalid={errors.gender ? "true" : "false"}
            aria-describedby="gender-error"
            {...register("gender", { required: "Gênero é obrigatório!" })}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          >
            <option value="">Selecione</option>

            {gendersOptions.map(gender => {
              return <option key={gender.value} value={gender.value}>{gender.label}</option>
            })}
          </select>

          {errors.gender && <SpanError id="gender-error" message={errors.gender.message} />}
        </div>

        <fieldset className="mb-3">
          <Label htmlFor="" text="Preferências:" />

          <div className="flex gap-5 bg-blue-50 border rounded p-2 shadow leading-tight">
            {preferencesOptions.map(preference => {
              return (
                <div key={preference.value} className="mb-1">
                  <label htmlFor={preference.value} className="cursor-pointer">{preference.label}</label>
                  <input
                    id={preference.value}
                    type="checkbox"
                    value={preference.value}
                    {...register("preferences")}
                    className="ml-1 cursor-pointer"
                  />
                </div>
              );
            })}
          </div>
        </fieldset>

        <div className="mb-3">
          <Label htmlFor="password" text="Senha:" />
          <InputField
            id="password"
            type="password"
            placeholder="Degite a senha"
            error={errors.password}
            ariaDescribedby="password-error"
            register={register("password", {
              required: "Senha é obrigatória!",
              minLength: {
                value: 6,
                message: "A senha deve ter no mínimo 6 caracteres!",
              },
            })}
          />

          {errors.password && <SpanError id="password-error" message={errors.password.message} />}
        </div>

        <div className="mb-3">
          <Label htmlFor="confirmPassword" text="Confirmar Senha:" />
          <InputField
            id="confirmPassword"
            type="password"
            placeholder="Confirme a senha"
            error={errors.confirmPassword}
            ariaDescribedby="confirm-password-error"
            register={register("confirmPassword", {
              required: "Confirmação de senha é obrigatória!",
              validate: (value) => value === password || "As senhas não coincidem!",
            })}
          />

          {errors.confirmPassword && <SpanError id="confirm-password-error" message={errors.confirmPassword.message} />}
        </div>

        <div className="flex flex-row justify-end mt-5">
          <Button
            value={isSubmitting ? "Enviando..." : "Enviar"}
            disabled={isSubmitting}
            ariaLabel="Enviar formulário de cadastro"
          />
        </div>
      </form>
    </div>
  );
}

export default App;
