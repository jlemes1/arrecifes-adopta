'use client';

import { useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  PublishPetFormData,
  publishPetSchema,
} from '@/schemas/publishPetSchema';
import { usePets } from '@/context/PetsContext';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export function PublishPetForm() {
  const router = useRouter();
  const { createPet } = usePets();
  const [submitMessage, setSubmitMessage] = useState('');

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<PublishPetFormData>({
    resolver: zodResolver(publishPetSchema),
  });

  const onSubmit: SubmitHandler<PublishPetFormData> = (data) => {
    try {
      createPet(data);

      setSubmitMessage('Tu mascota ha sido publicada!');

      reset();

      setTimeout(() => {
        setSubmitMessage('');
      }, 2000);

      setTimeout(() => {
        router.push('/pets');
      }, 3000);
    } catch (error) {
      setSubmitMessage('Error al publicar la mascota');
      console.error(error);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className='fieldset bg-base-200 border-accent w-full max-w-2xl border p-4'
    >
      <h2 className='text-center text-2xl sm:text-3xl lg:text-4xl font-bold p-4'>
        Información de la mascota
      </h2>

      <label
        htmlFor='name'
        className='label text-sm font-semibold text-neutral'
      >
        Nombre
      </label>
      <input
        type='text'
        id='name'
        className='input w-full'
        placeholder='Ingrese el nombre'
        {...register('name')}
      />

      {errors.name?.message && (
        <p className='text-red-500 font-medium'>{errors.name?.message}</p>
      )}

      <label htmlFor='age' className='label text-sm font-semibold text-neutral'>
        Edad
      </label>
      <input
        type='text'
        id='age'
        className='input w-full'
        placeholder='Ingrese la edad'
        {...register('age')}
      />

      {errors.age?.message && (
        <p className='text-red-500 font-medium'>{errors.age?.message}</p>
      )}

      <label
        htmlFor='animal'
        className='label text-sm font-semibold text-neutral'
      >
        Animal
      </label>
      <select
        defaultValue='Tipo Animal'
        id='animal'
        className='select'
        {...register('animal')}
      >
        <option disabled={true}>Tipo Animal</option>
        <option value='Perro'>Perro</option>
        <option value='Gato'>Gato</option>
      </select>

      {errors.animal?.message && (
        <p className='text-red-500 font-medium'>{errors.animal?.message}</p>
      )}

      <label
        htmlFor='photo'
        className='label text-sm font-semibold text-neutral'
      >
        Foto
      </label>
      <input
        type='file'
        id='photo'
        accept='image/*'
        className='file-input file-input-neutral '
        {...register('photo')}
      />

      {errors.photo?.message && (
        <p className='text-red-500 font-medium'>{errors.photo?.message}</p>
      )}

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
        Publicar
      </button>

      {submitMessage && (
        <div className='toast toast-top toast-center'>
          <div className='alert alert-success rounded-field text-white'>
            <span>{submitMessage}</span>
          </div>
        </div>
      )}
    </form>
  );
}
