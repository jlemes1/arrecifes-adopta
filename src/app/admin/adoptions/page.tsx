'use client';

import { useEffect, useState } from 'react';
import { Pet } from '@/types/pet';
import { AdoptionRequest } from '@/types/adoption';
import { supabase } from '@/utils/supabase/client';
import AdminAdoptionCard from '@/components/admin/AdminAdoptionCard';
import { acceptAdoption, rejectAdoption } from '../actions';

type AdoptionWithPet = AdoptionRequest & { pets: Pet };

export default function AdoptionsPage() {
  const [requests, setRequests] = useState<AdoptionWithPet[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Trae todas las solicitudes de adopción que están en estado 'pending'
    const fetchAdoptionRequests = async () => {
      const { data, error } = await supabase
        .from('adoption_requests')
        .select('*, pets(*)')
        .eq('status', 'pending')
        .order('created_at', { ascending: false });

      if (error) {
        console.error('Error al cargar las solicitudes de adopción:', error);
      } else {
        setRequests((data as AdoptionWithPet[]) || []);
      }
      setLoading(false);
    };

    fetchAdoptionRequests();
  }, []);

  const handleAccept = async (requestId: number, petId: number) => {
    await acceptAdoption(requestId, petId);
    // Cuando se acepta una solicitud, se eliminan todas las demás pq la mascota ya fue adoptada
    setRequests((prev) => prev.filter((r) => r.pet_id !== petId));
  };

  const handleReject = async (requestId: number) => {
    // Cuando se rechaza una solicitud, se elimina solo esa solicitud
    await rejectAdoption(requestId);
    setRequests((prev) => prev.filter((r) => r.id !== requestId));
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
        Solicitudes de adopción
      </h2>

      {requests.length === 0 ? (
        <div className='text-center py-12'>
          <p className='text-lg text-neutral/60'>
            No hay solicitudes de adopción pendientes.
          </p>
        </div>
      ) : (
        <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 justify-items-center'>
          {requests.map((request) => (
            <AdminAdoptionCard
              key={request.id}
              request={request}
              pet={request.pets}
              onAccept={handleAccept}
              onReject={handleReject}
            />
          ))}
        </div>
      )}
    </div>
  );
}
