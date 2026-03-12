'use client';

import { useEffect, useState } from 'react';
import { Pet } from '@/types/pet';
import { AdoptionRequest } from '@/types/adoption';
import { supabase } from '@/utils/supabase/client';
import Image from 'next/image';

type AdoptedPet = Pet & {
  adoption_requests: AdoptionRequest[];
};

export default function HistoryPage() {
  const [pets, setPets] = useState<AdoptedPet[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAdoptedPets = async () => {
      // Trae solo las mascotas adoptadas y filtra las solicitudes para traer solo las aceptadas
      const { data, error } = await supabase
        .from('pets')
        .select('*, adoption_requests(*)')
        .eq('adopted', true)
        .eq('adoption_requests.status', 'accepted')
        .order('created_at', { ascending: false });

      if (error) {
        console.error('Error al cargar el historial:', error);
      } else {
        setPets((data as AdoptedPet[]) || []);
      }
      setLoading(false);
    };

    fetchAdoptedPets();
  }, []);

  if (loading) {
    return (
      <div className='flex justify-center items-center h-64'>
        <span className='loading loading-spinner loading-lg text-accent'></span>
      </div>
    );
  }

  return (
    <div>
      <h2 className='text-2xl sm:text-3xl font-bold mb-6'>
        Historial de adopción
      </h2>

      {pets.length === 0 ? (
        <div className='text-center py-12'>
          <p className='text-lg text-neutral/60'>
            No hay mascotas adoptadas aún.
          </p>
        </div>
      ) : (
        <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 justify-items-center'>
          {pets.map((pet) => {
            const adopter = pet.adoption_requests?.[0];

            return (
              <div
                key={pet.id}
                className='card bg-base-100 w-full max-w-sm shadow-sm rounded-none border border-accent'
              >
                <figure className='relative w-full h-48 overflow-hidden'>
                  <Image
                    src={pet.src}
                    alt={pet.alt}
                    fill
                    className='object-cover object-center'
                  />
                  <div className='absolute top-2 right-2'>
                    <span className='badge badge-primary text-white'>
                      Adoptado
                    </span>
                  </div>
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
                    Publicador
                  </div>
                  <p>
                    <span className='font-bold'>Nombre:</span>{' '}
                    {pet.contact_name}
                  </p>
                  <p>
                    <span className='font-bold'>Email:</span>{' '}
                    {pet.contact_email}
                  </p>
                  <p>
                    <span className='font-bold'>Teléfono:</span>{' '}
                    {pet.contact_phone}
                  </p>

                  {adopter && (
                    <>
                      <div className='divider divider-accent my-1 text-sm font-bold'>
                        Adoptante
                      </div>
                      <p>
                        <span className='font-bold'>Nombre:</span>{' '}
                        {adopter.username}
                      </p>
                      <p>
                        <span className='font-bold'>Email:</span>{' '}
                        {adopter.email}
                      </p>
                      <p>
                        <span className='font-bold'>Teléfono:</span>{' '}
                        {adopter.phone}
                      </p>
                    </>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
