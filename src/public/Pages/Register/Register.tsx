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

        }
    })
    const mutation = useRegister();
    const { mutate, isPending, isError, error } = mutation;
    const onSubmit = (data: RegisterForm) => {
        mutate(data);
    } 
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <CustomInput control={control} error={errors.email} label={"Email"} name={"email"} type={"email"} />
        <CustomInput control={control} error={errors.password} label={"Password"} name={"password"} type={"password"} />
        <CustomInput control={control} error={errors.confirmPassword} label={"Confirm Password"} name={"confirmPassword"} type={"password"} />
  <button type="submit" disabled={isPending} className="btn btn-primary">{isPending ? "Registrando" : "Registrar"}</button>
        {isError && <div style={{ color: 'red', marginTop: 8 }}>Error: {error?.message}</div>}
      </form>
    </>
  );
}
