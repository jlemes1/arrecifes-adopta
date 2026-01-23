'use client';

import Link from 'next/link';
import { useState, FormEvent } from 'react';

export default function Contact() {
  const [result, setResult] = useState('');

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(event.currentTarget);
    formData.append('access_key', '51d02486-bef9-40e2-842c-101369b0f4e5');

    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      form.reset();
      setResult('Mensaje enviado!');
    } else {
      setResult('Error');
    }
  };

  return (
    <>
      <section className='bg-accent flex flex-col lg:flex-row px-4 sm:px-12 lg:px-72 pt-8 lg:pt-20'>
        <div className='pb-8 lg:pb-12.5 text-center lg:text-left'>
          <h1 className='text-4xl sm:text-5xl lg:text-6xl font-bold mb-4'>
            Contacto
          </h1>
          <Link href='/' className='font-medium'>
            Volver
          </Link>
        </div>
      </section>

      <section className='flex justify-center px-4 sm:px-12 py-8'>
        <form
          onSubmit={onSubmit}
          className='fieldset bg-base-200 border-accent w-full max-w-2xl border p-4'
        >
          <h2 className='text-center text-2xl sm:text-3xl lg:text-4xl font-bold p-4'>
            Deja tu consulta
          </h2>

          <label className='label text-sm font-semibold text-neutral'>
            Nombre
          </label>
          <input
            name='name'
            type='text'
            required
            className='input w-full'
            placeholder='Ingrese su nombre'
          />

          <label className='label text-sm font-semibold text-neutral'>
            Email
          </label>
          <input
            name='email'
            type='email'
            required
            className='input w-full'
            placeholder='Ingrese su email'
          />
          <label className='label text-sm font-semibold text-neutral'>
            Asunto
          </label>
          <input
            name='subject'
            type='text'
            required
            className='input w-full'
            placeholder='Ingrese el asunto'
          />

          <label className='label text-sm font-semibold text-neutral'>
            Mensaje
          </label>
          <textarea
            name='message'
            className='textarea w-full'
            required
            placeholder='Ingrese el mensaje'
          ></textarea>

          <button
            type='submit'
            className='btn btn-accent text-white mt-4 w-full'
          >
            Enviar
          </button>
          <p className='text-sm font-semibold text-neutral text-center mt-2'>
            {result}
          </p>
        </form>
      </section>
    </>
  );
}
