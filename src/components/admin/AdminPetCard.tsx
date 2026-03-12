'use client';

import Image from 'next/image';
import { Pet } from '@/types/pet';
import { useTransition } from 'react';

type AdminPetCardProps = {
  pet: Pet;
  actions?: {
    label: string;
    onClick: (petId: number) => Promise<void>;
    className: string;
  }[];
};

export default function AdminPetCard({ pet, actions }: AdminPetCardProps) {
  const [isPending, startTransition] = useTransition();

  return (
    <div className='card bg-base-100 w-full max-w-sm shadow-sm rounded-none border border-accent'>
      <figure className='relative w-full h-48 overflow-hidden'>
        <Image
          src={pet.src}
          alt={pet.alt}
          fill
          className='object-cover object-center'
        />
      </figure>
      <div className='card-body gap-1 p-4'>
        <h2 className='card-title flex justify-center text-xl font-bold'>
          {pet.name}
        </h2>
        <p>
          <span className='font-bold'>Tipo:</span> {pet.animal}
        </p>
        <p>
          <span className='font-bold'>Edad:</span> {pet.age}
        </p>
        <div className='divider divider-accent my-1 text-sm font-bold'>
          Solicitante
        </div>
        <p>
          <span className='font-bold'>Nombre:</span> {pet.contact_name}
        </p>
        <p>
          <span className='font-bold'>Email:</span> {pet.contact_email}
        </p>
        <p>
          <span className='font-bold'>Teléfono:</span> {pet.contact_phone}
        </p>

        {actions && actions.length > 0 && (
          <div className='card-actions justify-center mt-2 gap-2'>
            {actions.map((action) => (
              <button
                key={action.label}
                className={`btn btn-sm ${action.className}`}
                disabled={isPending}
                onClick={() => {
                  startTransition(async () => {
                    await action.onClick(pet.id);
                  });
                }}
              >
                {isPending ? (
                  <span className='loading loading-spinner loading-xs'></span>
                ) : (
                  action.label
                )}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
