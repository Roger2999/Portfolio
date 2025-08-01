import { useForm } from "react-hook-form"
import { CustomInput } from "../../../components/CustomInput/CustomInput"
import { zodResolver } from "@hookform/resolvers/zod"
import { schema, type RegisterForm } from "../../../models/register.model"
import { useRegister } from "../../../hooks/useRegister"
import { useNavigate } from "react-router-dom"

export const Register = () => {
    const {control, formState:{errors}, handleSubmit } = useForm({
        resolver: zodResolver(schema),
        defaultValues:{
            userName:"",
            email:"",
            password:"",
            confirmPassword:""

        }
    })
    const navigate = useNavigate()
    const mutation = useRegister();
    const { mutate, isPending, isError, error } = mutation;
    const onSubmit = (data: RegisterForm) => {
        mutate(data, {
            onSuccess: () => {
                console.log("Registro exitoso");
                navigate("/home");
            },
            onError: (err: any) => {
                alert("Error en el registro: " + (err?.message || "Intenta nuevamente"));
            }
        });
    } 
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <CustomInput control={control} error={errors.email} label={"Email"} name={"email"} type={"email"} />
        <CustomInput control={control} error={errors.password} label={"Password"} name={"password"} type={"password"} />
        <CustomInput control={control} error={errors.confirmPassword} label={"Confirm Password"} name={"confirmPassword"} type={"password"} />
        <button type="submit" disabled={isPending}>{isPending ? "Registrando" : "Registrar"}</button>
        {isError && <div style={{ color: 'red', marginTop: 8 }}>Error: {error?.message}</div>}
      </form>
    </>
  );
}
