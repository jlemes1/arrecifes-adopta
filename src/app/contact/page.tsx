import Link from 'next/link';
import { CircleArrowLeft } from 'lucide-react';

export default function Contact() {
  return (
    <>
      <section className='bg-accent flex flex-col lg:flex-row px-4 sm:px-12 lg:px-72 pt-8 lg:pt-20'>
        <div className='pb-8 lg:pb-12.5 text-center lg:text-left'>
          <h1 className='text-4xl sm:text-5xl lg:text-6xl font-bold mb-4'>
            Contacto
          </h1>
          <Link href='/' className='font-medium flex items-center gap-2'>
            <CircleArrowLeft />
            Volver
          </Link>
        </div>
      </section>

      <section className='flex items-center justify-center px-6 sm:px-8 h-[calc(100vh-450px)]'>
        <div className='flex flex-col justify-center items-center px-4 sm:px-12 py-8 gap-4'>
          <h2 className='text-2xl sm:text-3xl lg:text-4xl font-bold'>
            Tenés alguna consulta?
          </h2>
          <p className='text-base sm:text-lg lg:text-xl font-medium'>
            Completá el siguiente formulario.
          </p>
          <a
            className='btn btn-accent text-base-100 text-base sm:text-lg font-medium w-fit'
            href='https://forms.gle/xA7THSqLNTuzonD36'
            target='_blank'
            rel='noopener noreferrer'
          >
            Ir al formulario
          </a>
        </div>
      </section>
    </>
  );
}
