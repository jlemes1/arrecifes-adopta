'use client';

import { useEffect, useState } from 'react';
import { Pet } from '@/types/pet';
import { supabase } from '@/utils/supabase/client';
import AdminPetCard from '@/components/admin/AdminPetCard';
import { deletePet } from '../actions';

export default function ApprovedPage() {
  const [pets, setPets] = useState<Pet[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Trae todas las mascotas que están en estado 'approved' y que todavía no fueron adoptadas
    const fetchApprovedPets = async () => {
      const { data, error } = await supabase
        .from('pets')
        .select('*')
        .eq('status', 'approved')
        .eq('adopted', false)
        .order('created_at', { ascending: false });

      if (error) {
        console.error('Error al cargar las mascotas aprobadas:', error);
      } else {
        setPets(data || []);
      }
      setLoading(false);
    };

    fetchApprovedPets();
  }, []);

  const handleDelete = async (petId: number) => {
    await deletePet(petId);
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
        Mascotas aprobadas
      </h2>

      {pets.length === 0 ? (
        <div className='text-center py-12'>
          <p className='text-lg text-neutral/60'>
            No hay mascotas aprobadas actualmente.
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
                  label: 'Eliminar',
                  onClick: handleDelete,
                  className: 'btn-error text-white',
                },
              ]}
            />
          ))}
        </div>
      )}
    </div>
  );
}
