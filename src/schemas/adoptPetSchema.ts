import { z } from 'zod';

export const adoptPetSchema = z.object({
  username: z
    .string({ error: 'El nombre es requerido' })
    .min(3, { error: 'El nombre debe tener al menos 3 caracteres' })
    .regex(/^[A-Za-zÀ-ÖØ-öø-ÿ\s]+$/, 'Solo letras y espacios'),
  email: z.email({
    error: 'El email debe ser una dirección de correo electrónico válida',
  }),
  phone: z
    .string({ error: 'El teléfono es requerido' })
    .regex(/^[0-9+\s-]{6,15}$/, 'Ingrese un teléfono válido'),
});

export type AdoptPetFormData = z.infer<typeof adoptPetSchema>;
