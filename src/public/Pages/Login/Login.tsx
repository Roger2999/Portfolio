
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useAuthStore } from '../../../store/useAuthStore/useAuthStore';
import { schema, type LoginForm } from '../../../models/formModel';
import { CustomInput } from '../../../components/CustomInput/CustomInput';
import { useNavigate } from 'react-router-dom';
import { useFetchApi } from '../../../hooks/usefechApi';



export const Login = () => {
  const { Login: loginAction } = useAuthStore();
  const logout = useAuthStore((state) => state.Logout);
  const { control, handleSubmit, formState: { errors } } = useForm<LoginForm>({
    resolver: zodResolver(schema),
    defaultValues: { user: '', password: '' },
  });
  const navigate = useNavigate();
  // Usar el custom hook para login
  const { loginMutation } = useFetchApi('https://reqres.in/api/login');

  const onSubmit = async (data: LoginForm) => {
    try {
      const result = await loginMutation.mutateAsync(data);
      loginAction(result.token, data.user);
      navigate('/private/dashboard');
    } catch {
      alert('Login fallido: usuario o contraseña incorrectos');
    }
  };

  return (
    <div style={{ maxWidth: 400, margin: '2rem auto', padding: 24, border: '1px solid #eee', borderRadius: 8 }}>
      <h2>Iniciar sesión</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <CustomInput label={"Name"} type={"text"} name={"user"} control={control} error={errors.user} />
        <CustomInput label={"Password"} type={"password"} name={"password"} control={control} error={errors.password} />
  
        <button type="submit" disabled={loginMutation.isPending} >
          {loginMutation.isPending ? 'Ingresando...' : 'Ingresar'}
        </button>
       
        <button type="button" onClick={() => logout()} style={{ marginLeft: '1rem' }}>
          Logout
        </button>
      </form>
    </div>
  );
}
