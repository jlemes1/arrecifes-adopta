'use client';

import { useEffect, useState } from 'react';
import { Pet } from '@/types/pet';
import { supabase } from '@/utils/supabase/client';
import AdminPetCard from '@/components/admin/AdminPetCard';
import { approvePet, rejectPet } from '../actions';

export default function PublicationsPage() {
  const [pets, setPets] = useState<Pet[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Trae todas las mascotas que están en estado 'pending' y las ordena por fecha de creación
    // Solo se ejecuta una vez al cargar la página pq tiene un array vacío como dependencia
    const fetchPendingPets = async () => {
      const { data, error } = await supabase
        .from('pets')
        .select('*')
        .eq('status', 'pending')
        .order('created_at', { ascending: false });

      if (error) {
        console.error('Error al cargar las solicitudes:', error);
      } else {
        setPets(data || []);
      }
      setLoading(false);
    };

    fetchPendingPets();
  }, []);

  const handleApprove = async (petId: number) => {
    // Al hacer click en aprobar llama al server action y actualiza el estado a 'approved' en la bd
    await approvePet(petId);
    // Actualiza el estado local para que desaparezca de la lista sin recargar la página
    setPets((prev) => prev.filter((p) => p.id !== petId));
  };

  const handleReject = async (petId: number) => {
    // Lo mismo pero con rechazar
    await rejectPet(petId);
    setPets((prev) => prev.filter((p) => p.id !== petId));
  };

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
        Solicitudes de publicación
      </h2>

      {pets.length === 0 ? (
        <div className='text-center py-12'>
          <p className='text-lg text-neutral/60'>
            No hay solicitudes de publicación pendientes.
          </p>
        </div>
      ) : (
        <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 justify-items-center'>
          {pets.map((pet) => (
            <AdminPetCard
              key={pet.id}
              pet={pet}
              actions={[
                {
                  label: 'Rechazar',
                  onClick: handleReject,
                  className: 'btn-error text-white',
                },
                {
                  label: 'Aprobar',
                  onClick: handleApprove,
                  className: 'btn-secondary text-white',
                },
              ]}
            />
          ))}
        </div>
      )}
    </div>
  );
}
