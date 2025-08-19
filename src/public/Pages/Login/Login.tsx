
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
    mode: 'onBlur',
  });
 
  const logout = AuthStore((state)=> state.logout)
  const isAutenticated = AuthStore((state)=>state.isAutenticated)
  const {mutation } = useAuth()
  const {mutate, isPending} = mutation


  const onSubmit = async (data: LoginForm) => {
      mutate(data)
      
    
  };

  return (
  <div className="flex justify-center items-center min-h-full bg-base-100">
      <div className="card w-96 bg-base-200 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">Iniciar Sesion</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
        <CustomInput label={"Email"} type={"email"} name={"email"} control={control} error={errors.email} />
        <CustomInput label={"Password"} type={"password"} name={"password"} control={control} error={errors.password} />
        <button type="submit" disabled ={isPending} className="btn btn-primary">
          {isPending?"Ingresando...":"Ingresar"}
        </button>
        {isAutenticated&&(
          <button type="button" onClick={logout} className="btn btn-outline btn-error ml-4">
            Logout
          </button>
        )}
        
      </form>
        </div>
      </div>
    </div>

   
  );
}
