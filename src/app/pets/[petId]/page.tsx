'use client';

import { useParams } from 'next/navigation';
import { usePets } from '@/context/PetsContext';
import Link from 'next/link';
import { AdoptPetForm } from '@/components/forms/AdoptPetForm';

function PetId() {
  const params = useParams();
  const petId = params?.petId as string | undefined;
  const { pets } = usePets();
  const pet = pets.find((p) => String(p.id) === String(petId));

  if (!pet) {
    return (
      <section>
        <div className='bg-accent flex flex-col lg:flex-row px-4 sm:px-12 lg:px-72 pt-8 lg:pt-20'>
          <div className='pb-8 lg:pb-12.5 text-center lg:text-left'>
            <h1 className='text-4xl sm:text-5xl lg:text-6xl font-bold mb-4'>
              Mascota no encontrada
            </h1>
            <Link href='/pets' className='font-medium'>
              Volver
            </Link>
          </div>
        </div>
        <div className='flex items-center justify-center h-[calc(100vh-450px)]'>
          <p className='text-center text-2xl sm:text-3xl lg:text-5xl'>
            La mascota no existe o ya fue adoptada.
          </p>
        </div>
      </section>
    );
  }
  return (
    <section>
      <div className='bg-accent flex flex-col lg:flex-row px-4 sm:px-12 lg:px-72 pt-8 lg:pt-20 '>
        <div className='pb-8 lg:pb-12.5 text-center lg:text-left'>
          <h1 className='text-4xl sm:text-5xl lg:text-6xl font-bold mb-4'>
            Adoptar a {pet.name}
          </h1>
          <Link href='/pets' className='font-medium'>
            Volver
          </Link>
        </div>
      </div>
      <div className='flex items-center justify-center px-4 h-[calc(100vh-450px)]'>
        <AdoptPetForm />
      </div>
    </section>
  );
}

export default PetId;
