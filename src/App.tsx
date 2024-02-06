import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import * as y from 'yup';

const schema = y
  .object()
  .shape({
    name: y.string().required(),
  })
  .required();

export function App() {
  const {
    register,
    formState: { errors, isSubmitting },
    handleSubmit,
  } = useForm({
    resolver: yupResolver(schema),
    mode: 'onChange',
  });

  console.log(isSubmitting);

  return (
    <form onSubmit={handleSubmit(console.log)}>
      <fieldset>
        <label>Name</label>
        <br />
        <input
          {...register('name')}
          aria-invalid={!!errors.name?.message}
          aria-describedby={errors.name?.message ? 'name__error' : undefined}
          aria-errormessage={errors.name?.message || undefined}
        />
        <br />
        {errors.name?.message && (
          <span id="name__error" role="alert">
            {errors.name.message}
          </span>
        )}
      </fieldset>
      <button>Send</button>
    </form>
  );
}
