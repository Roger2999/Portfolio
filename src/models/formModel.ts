import { z } from 'zod';

export const schema = z.object({
  user: z.string().min(3, 'Usuario requerido'),
  password: z.string().min(8, 'Contraseña requerida'),
});

export type LoginForm = z.infer<typeof schema>;