'use client';

import { useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { AdoptPetFormData, adoptPetSchema } from '@/schemas/adoptPetSchema';
import { useState } from 'react';

export function AdoptPetForm() {
  const [submitMessage, setSubmitMessage] = useState('');

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<AdoptPetFormData>({
    resolver: zodResolver(adoptPetSchema),
  });

  const onSubmit: SubmitHandler<AdoptPetFormData> = (data) => {
    try {
      console.log(data);
      setSubmitMessage('Tu solicitud de adopción ha sido enviada!');

      reset();

      setTimeout(() => {
        setSubmitMessage('');
      }, 3000);
    } catch (error) {
      setSubmitMessage('Error al enviar el formulario');
      console.error(error);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className='fieldset bg-base-200 border-accent w-full max-w-2xl border p-4'
    >
      <h2 className='text-center text-2xl sm:text-3xl lg:text-4xl font-bold p-4'>
        Información de contacto
      </h2>

      <label
        htmlFor='username'
        className='label text-sm font-semibold text-neutral'
      >
        Nombre
      </label>
      <input
        type='text'
        id='username'
        className='input w-full'
        placeholder='Ingrese su nombre'
        {...register('username')}
      />

      {errors.username?.message && (
        <p className='text-red-500 font-medium'>{errors.username?.message}</p>
      )}

      <label
        htmlFor='email'
        className='label text-sm font-semibold text-neutral'
      >
        Email
      </label>
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

      <label
        htmlFor='phone'
        className='label text-sm font-semibold text-neutral'
      >
        Teléfono
      </label>
      <input
        type='text'
        id='phone'
        className='input w-full'
        placeholder='Ingrese su telefono'
        {...register('phone')}
      />

      {errors.phone?.message && (
        <p className='text-red-500 font-medium'>{errors.phone?.message}</p>
      )}

      <button type='submit' className='btn btn-accent text-white mt-4 w-full'>
        Enviar
      </button>

      {submitMessage && (
        <div className='toast toast-center lg:toast-end'>
          <div className='alert alert-success rounded-field text-white'>
            <span>{submitMessage}</span>
          </div>
        </div>
      )}
    </form>
  );
}
