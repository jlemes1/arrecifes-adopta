'use client';

import { createContext, useContext, useState, ReactNode } from 'react';
import { Pet } from '@/types/pet';
import { petsData } from '@/data/petsData';
import { PublishPetFormData } from '@/schemas/publishPetSchema';

type PetsContext = {
  pets: Pet[];
  createPet: (petData: PublishPetFormData) => void;
};

const PetsContext = createContext<PetsContext | undefined>(undefined);

export function PetsProvider({ children }: { children: ReactNode }) {
  const [pets, setPets] = useState<Pet[]>(petsData);

  const createPet = (petData: PublishPetFormData) => {
    const newId = Math.max(...pets.map((p) => p.id), 0) + 1;

    const imageFile = petData.photo[0];
    const imageUrl = URL.createObjectURL(imageFile);

    const newPet: Pet = {
      id: newId,
      name: petData.name,
      age: petData.age,
      animal: petData.animal,
      src: imageUrl,
      alt: petData.name,
    };

    setPets((prevPets) => [newPet, ...prevPets]);
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
    throw new Error('usePets debe ser usado dentro de un PetsProvider');
  }
  return context;
}
