
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { schema, type LoginForm } from '../../../models/formModel';
import { CustomInput } from '../../../components/CustomInput/CustomInput';
import { useAuth } from '../../../hooks/useAuth';
import { AuthStore } from '../../../store';


export const Login = () => {
  
  const { control, handleSubmit, formState: { errors } } = useForm<LoginForm>({
    resolver: zodResolver(schema),
    defaultValues: { email: '', password: '' },
  });
 
  const logout = AuthStore((state)=> state.logout)
  const isAutenticated = AuthStore((state)=>state.isAutenticated)
  const {mutation } = useAuth()
  const {mutate, isPending} = mutation

  const onSubmit = async (data: LoginForm) => {
      mutate(data)
      
    
  };

  return (
    <div style={{ maxWidth: 400, margin: '2rem auto', padding: 24, border: '1px solid #eee', borderRadius: 8 }}>
      <h2>Iniciar sesión</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <CustomInput label={"Email"} type={"email"} name={"email"} control={control} error={errors.email} />
        <CustomInput label={"Password"} type={"password"} name={"password"} control={control} error={errors.password} />
        <button type="submit" disabled ={isPending}>
          {isPending?"Ingresando...":"Ingresar"}
        </button>
        {isAutenticated&&(<button type="button" onClick={logout} style={{ marginLeft: '1rem' }}>
          Logout
        </button>)}
        
      </form>
    </div>
  );
}
