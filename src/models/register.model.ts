import z from "zod";

export const schema = z.object({
    email:z.email().min(1,"El email es obligatorio"),
    password:z.string().min(8,"La password debe tener al menos 8 caracteres"),
    confirmPassword: z.string().min(8,"La password debe tener al menos 8 caracteres"),
     
}).refine((state)=> state.password === state.confirmPassword, {
    message: "Las passwords deben ser iguales",
    path:["confirmPassword"]
});

export type RegisterForm = z.infer<typeof schema>;