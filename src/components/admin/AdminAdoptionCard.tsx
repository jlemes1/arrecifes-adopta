'use client';

import Image from 'next/image';
import { Pet } from '@/types/pet';
import { AdoptionRequest } from '@/types/adoption';
import { useTransition } from 'react';

type AdminAdoptionCardProps = {
  request: AdoptionRequest;
  pet: Pet;
  onAccept: (requestId: number, petId: number) => Promise<void>;
  onReject: (requestId: number) => Promise<void>;
};

export default function AdminAdoptionCard({
  request,
  pet,
  onAccept,
  onReject,
}: AdminAdoptionCardProps) {
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

        <div className='divider divider-accent my-1 text-sm font-bold'>
          Solicitante
        </div>

        <p>
          <span className='font-bold'>Nombre:</span> {request.username}
        </p>
        <p>
          <span className='font-bold'>Email:</span> {request.email}
        </p>
        <p>
          <span className='font-bold'>Teléfono:</span> {request.phone}
        </p>

        <div className='card-actions justify-center mt-2 gap-2'>
          <button
            className='btn btn-sm btn-error text-white'
            disabled={isPending}
            onClick={() => {
              startTransition(async () => {
                await onReject(request.id);
              });
            }}
          >
            {isPending ? (
              <span className='loading loading-spinner loading-xs'></span>
            ) : (
              'Rechazar'
            )}
          </button>
          <button
            className='btn btn-sm btn-secondary text-white'
            disabled={isPending}
            onClick={() => {
              startTransition(async () => {
                await onAccept(request.id, request.pet_id);
              });
            }}
          >
            {isPending ? (
              <span className='loading loading-spinner loading-xs'></span>
            ) : (
              'Aceptar'
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
