import Link from 'next/link';
import { PublishPetForm } from '@/components/forms/PublishPetForm';

export default function NewPet() {
  return (
    <>
      <section className='bg-accent flex flex-col lg:flex-row  px-4 sm:px-12 lg:px-72 pt-8 lg:pt-20 '>
        <div className='pb-8 lg:pb-12.5 text-center lg:text-left'>
          <h1 className='text-4xl sm:text-5xl lg:text-6xl font-bold mb-4'>
            Publicar mascota
          </h1>
          <Link href='/services' className='font-medium'>
            Volver
          </Link>
        </div>
      </section>

      <section className='flex justify-center px-4 sm:px-12 py-8'>
        <PublishPetForm />
      </section>
    </>
  );
}
