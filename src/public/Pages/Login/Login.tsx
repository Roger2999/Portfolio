
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useAuthStore } from '../../../store/useAuthStore/useAuthStore';
import { schema, type LoginForm } from '../../../models/formModel';
import { CustomInput } from '../../../components/CustomInput/CustomInput';

export const Login = () => {
  const { Login: loginAction } = useAuthStore();
  const logout = useAuthStore((state) => state.Logout);
  const { control, handleSubmit, formState: { errors, isSubmitting } } = useForm<LoginForm>({
    resolver: zodResolver(schema),
    defaultValues: { user: '', password: '' },
  });

  // Simulación de login (reemplazar por llamada real a API si es necesario)
  const onSubmit = async (data: LoginForm) => {
    // Aquí deberías hacer la petición a tu backend y obtener el token
    // Simulación:
    const fakeToken = 'fake-jwt-token';
    loginAction(fakeToken, data.user);
  };

  return (
    <div style={{ maxWidth: 400, margin: '2rem auto', padding: 24, border: '1px solid #eee', borderRadius: 8 }}>
      <h2>Iniciar sesión</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <CustomInput label={"Name"} type={"text"} name={"user"} control={control} error={errors.user} />
        <CustomInput label={"Password"} type={"password"} name={"password"} control={control} error={errors.password} />
        <button type="submit" disabled={isSubmitting} >
          {isSubmitting ? 'Ingresando...' : 'Ingresar'}
        </button>
        <button type="button" onClick={() => logout()} style={{ marginLeft: '1rem' }}>
          Logout
        </button>
      </form>
    </div>
  );
}
