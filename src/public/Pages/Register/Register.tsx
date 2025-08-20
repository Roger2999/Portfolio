import { useForm } from "react-hook-form"
import { CustomInput } from "../../../components/CustomInput/CustomInput"
import { zodResolver } from "@hookform/resolvers/zod"
import { schema, type RegisterForm } from "../../../models/register.model"
import { useRegister } from "../../../hooks/useRegister"

export const Register = () => {
    const {control, formState:{errors}, handleSubmit } = useForm({
        resolver: zodResolver(schema),
        defaultValues:{
            email:"",
            password:"",
            confirmPassword:""
        },
        mode:"onBlur"
    })
    const mutation = useRegister();
    const { mutate, isPending, isError, error } = mutation;
    const onSubmit = (data: RegisterForm) => {
        mutate(data);
    } 
  return (
    <>
     <div className="flex justify-center items-center min-h-full bg-base-100">
      <div className="card w-96 bg-base-200 shadow-xl">
        <div className="card-body w-full">
          <h2 className="card-title">Registrarse</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <CustomInput control={control} error={errors.email} label={"Email"} name={"email"} type={"email"} />
        <CustomInput control={control} error={errors.password} label={"Password"} name={"password"} type={"password"} />
        <CustomInput control={control} error={errors.confirmPassword} label={"Confirm Password"} name={"confirmPassword"} type={"password"} />
  <button type="submit" disabled={isPending} className="btn btn-soft btn-primary mt-4">{isPending ? "Registrando" : "Registrar"}</button>
        {isError && <div className="error text-red-400 mt-4">Error: {error?.message}</div>}
      </form>
      </div>
      </div>
    </div>
    </>
  );
}
