'use client';

import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from 'react';
import { Pet } from '@/types/pet';
import { PublishPetFormData } from '@/schemas/publishPetSchema';
import { supabase } from '@/utils/supabase/client';

type PetsContext = {
  pets: Pet[];
  createPet: (petData: PublishPetFormData) => Promise<void>;
};

const PetsContext = createContext<PetsContext | undefined>(undefined);

export function PetsProvider({ children }: { children: ReactNode }) {
  const [pets, setPets] = useState<Pet[]>([]);

  useEffect(() => {
    // Carga las mascotas desde la base de datos
    const fetchPets = async () => {
      const { data, error } = await supabase
        .from('pets')
        .select('*')
        .eq('status', 'approved')
        .eq('adopted', false)
        .order('created_at', { ascending: false });

      if (error) {
        console.error('Error al cargar las mascotas:', error);
      } else {
        setPets(data);
      }
    };

    fetchPets();
  }, []);

  const createPet = async (petData: PublishPetFormData) => {
    const imageFile = petData.photo[0];
    const fileName = `${Date.now()}-${imageFile.name}`;

    // Sube la imagen al bucket
    const { error: uploadError } = await supabase.storage
      .from('pets-images')
      .upload(fileName, imageFile);

    if (uploadError) throw new Error('Error al subir la imagen');

    // Obtiene la URL pública de la imagen
    const { data: urlData } = supabase.storage
      .from('pets-images')
      .getPublicUrl(fileName);

    // Publica la mascota en la base de datos
    const { data, error: insertError } = await supabase
      .from('pets')
      .insert({
        name: petData.name,
        age: petData.age,
        animal: petData.animal,
        src: urlData.publicUrl,
        alt: petData.name,
        status: 'pending',
        contact_name: petData.username,
        contact_email: petData.email,
        contact_phone: petData.phone,
      })
      .select()
      .single();

    if (insertError) throw new Error('Error al publicar la mascota');

    setPets((prevPets) => [data, ...prevPets]);
  };

  return (
    <PetsContext.Provider value={{ pets, createPet }}>
      {children}
    </PetsContext.Provider>
  );
}

export function usePets() {
  const context = useContext(PetsContext);
  if (context === undefined) {
    throw new Error('usePets debe ser usado dentro del PetsProvider');
  }
  return context;
}
