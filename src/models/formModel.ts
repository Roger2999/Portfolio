import { z } from 'zod';

export const schema = z.object({
  email: z.email().min(1, 'Email obligatorio'),
  password: z.string().min(8, 'Contraseña requerida'),
});

export type LoginForm = z.infer<typeof schema>;