import { z } from 'zod';

export const loginSchema = z.object({
  email: z.email({
    error: 'El email debe ser una dirección de correo electrónico válida',
  }),
});

export type LoginFormData = z.infer<typeof loginSchema>;
