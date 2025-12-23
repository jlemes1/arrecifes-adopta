import { z } from 'zod';

export const publishPetSchema = z.object({
  name: z
    .string({ error: 'El nombre es requerido' })
    .min(3, { error: 'El nombre debe tener al menos 3 caracteres' })
    .regex(/^[A-Za-zÀ-ÖØ-öø-ÿ\s]+$/, 'Solo letras y espacios'),
  age: z.string().min(1, { error: 'La edad es requerida' }),
  animal: z.enum(['Perro', 'Gato'], { error: 'Seleccione el tipo de animal' }),
  photo: z
    .instanceof(FileList)
    .refine((files) => files.length > 0, 'Debes subir una foto'),
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

export type PublishPetFormData = z.infer<typeof publishPetSchema>;
