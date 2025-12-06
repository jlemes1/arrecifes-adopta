import Image from 'next/image';
import Link from 'next/link';
import dog from '@/assets/dog.jpg';

export default function Home() {
  return (
    <div className='hero bg-base-200 min-h-screen'>
      <div className='hero-content flex-col mb-24 lg:flex-row-reverse gap-8 lg:gap-12'>
        <Image
          src={dog}
          className='max-w-sm lg:max-w-lg aspect-square rounded-full shadow-2xl object-cover object-bottom-left'
          alt='Dog'
        />
        <div className='flex flex-col gap-4'>
          <h1 className='text-4xl sm:text-5xl lg:text-7xl font-bold'>
            Un <span className='text-accent'>espacio</span> para adoptar y dar
            en adopción
          </h1>
          <p className='text-base sm:text-lg lg:text-2xl font-medium'>
            Publicá tu mascota o encontrá la compañía ideal. Fácil, rápido y
            responsable.
          </p>
          <Link
            href='/services'
            className='btn btn-accent text-base-100 text-base sm:text-lg font-medium w-fit'
          >
            Ver Servicios
          </Link>
        </div>
      </div>
    </div>
  );
}
