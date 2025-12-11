import Link from 'next/link';
import Image from 'next/image';
import dogcat from '@/assets/dogcat.png';
import { Bone } from 'lucide-react';

export default function Services() {
  return (
    <section>
      <div className='bg-accent flex flex-col lg:flex-row  px-4 sm:px-12 lg:px-72 pt-8 lg:pt-20 '>
        <div className='pb-8 lg:pb-12.5 text-center lg:text-left'>
          <h1 className='text-4xl sm:text-5xl lg:text-6xl font-bold mb-4'>
            Servicios
          </h1>
          <Link href='/' className='font-medium'>
            Volver
          </Link>
        </div>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center gap-8 px-4 sm:px-8 md:px-12 lg:px-24 pb-16 pt-8 sm:pt-12 md:pt-16 lg:pt-20'>
        <div className='flex flex-col justify-center items-center'>
          <h1 className='text-4xl lg:text-5xl font-bold'>Adoptar</h1>
          <div className='divider divider-accent'></div>
          <div className='flex flex-col gap-2'>
            <p className='text-base sm:text-lg lg:text-2xl font-medium max-w-xl flex gap-2'>
              <Bone />
              Adoptar es un acto de amor que cambia vidas.
            </p>
            <p className='text-base sm:text-lg lg:text-2xl font-medium max-w-xl flex gap-2 pb-4'>
              <Bone />
              Encontrá animales que buscan un hogar.
            </p>
            <Link
              href='pets'
              className='btn btn-accent text-base-100 text-base text-center sm:text-lg font-medium mx-auto'
            >
              Ver mascotas
            </Link>
          </div>
        </div>

        <div>
          <Image src={dogcat} className='max-w-sm lg:max-w-md' alt='DogCat' />
        </div>

        <div className='flex flex-col justify-center items-center'>
          <h1 className='text-4xl lg:text-5xl font-bold'>Publicar</h1>
          <div className='divider divider-accent'></div>
          <div className='flex flex-col gap-2'>
            <p className='text-base sm:text-lg lg:text-2xl font-medium max-w-xl flex gap-2'>
              <Bone />
              ¿Necesitás dar en adopción a una mascota?.
            </p>
            <p className='text-base sm:text-lg lg:text-2xl font-medium max-w-xl flex gap-2 pb-4'>
              <Bone />
              Completá el formulario con los datos requeridos.
            </p>
            <Link
              href='pets/new'
              className='btn btn-accent text-base-100 text-base text-center sm:text-lg font-medium mx-auto'
            >
              Publicar mascota
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
