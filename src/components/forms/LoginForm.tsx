'use client';

import { useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { LoginFormData, loginSchema } from '@/schemas/loginSchema';
import { supabase } from '@/utils/supabase/client';

export function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit: SubmitHandler<LoginFormData> = async (data) => {
    try {
      //Envía un mail al admin y lo redirige al panel
      const { error } = await supabase.auth.signInWithOtp({
        email: data.email,
        options: {
          shouldCreateUser: false,
          emailRedirectTo: `${window.location.origin}/auth/callback`,
        },
      });

      if (error) throw error;

      reset();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className='fieldset bg-base-200 border-accent w-full max-w-2xl border p-4'
    >
      <input
        type='email'
        id='email'
        className='input w-full'
        placeholder='Ingrese su email'
        {...register('email')}
      />

      {errors.email?.message && (
        <p className='text-red-500 font-medium'>{errors.email?.message}</p>
      )}

      <button type='submit' className='btn btn-accent text-white mt-4 w-full'>
        Iniciar sesión
      </button>
    </form>
  );
}
