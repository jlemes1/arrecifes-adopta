'use client';

import Link from 'next/link';
import PetCard from '@/components/PetCard';
import { usePets } from '@/context/PetsContext';
import { useState } from 'react';

export default function Pets() {
  const { pets } = usePets();
  const [animalFilter, setAnimalFilter] = useState<'All' | 'Perro' | 'Gato'>(
    'All',
  );

  const visiblePets = pets.filter(
    (pet) => animalFilter === 'All' || pet.animal === animalFilter,
  );

  return (
    <>
      <section className='bg-accent flex flex-col lg:flex-row items-center justify-between px-4 sm:px-12 lg:px-72 pt-8 pb-16 lg:pt-20 '>
        <div className='pb-4 lg:pb-12 text-center lg:text-left'>
          <h1 className='text-4xl sm:text-5xl lg:text-6xl font-bold mb-4'>
            Mascotas
          </h1>
          <Link href='/' className='font-medium flex gap-1'>
            Volver
          </Link>
        </div>
        <form className='filter pt-4' onSubmit={(e) => e.preventDefault()}>
          <input
            className='btn btn-square btn-neutral'
            type='reset'
            value='x'
            onClick={() => setAnimalFilter('All')}
          />

          <input
            className='btn btn-neutral'
            type='radio'
            name='animal'
            aria-label='Perros'
            value='Perro'
            checked={animalFilter === 'Perro'}
            onChange={(e) =>
              setAnimalFilter(e.target.value as 'Perro' | 'Gato')
            }
          />
          <input
            className='btn btn-neutral'
            type='radio'
            name='animal'
            aria-label='Gatos'
            value='Gato'
            checked={animalFilter === 'Gato'}
            onChange={(e) =>
              setAnimalFilter(e.target.value as 'Perro' | 'Gato')
            }
          />
        </form>
      </section>

      <section className='bg-base-200 grid grid-cols-1 lg:grid-cols-4 gap-8 px-24 py-12 justify-items-center place-content-center'>
        {visiblePets.map((petData) => (
          <PetCard key={petData.id} {...petData} />
        ))}
      </section>
    </>
  );
}
