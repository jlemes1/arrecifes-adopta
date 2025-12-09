import cat1 from '@/assets/pets/cat1.jpg';
import cat2 from '@/assets/pets/cat2.jpg';
import cat3 from '@/assets/pets/cat3.jpg';
import cat4 from '@/assets/pets/cat4.jpg';
import dog1 from '@/assets/pets/dog1.jpg';
import dog2 from '@/assets/pets/dog2.jpg';
import dog3 from '@/assets/pets/dog3.jpg';
import dog4 from '@/assets/pets/dog4.jpg';

import { Pet } from '@/types/pet';

export const petsData: Pet[] = [
  {
    id: 1,
    name: 'Luna',
    age: 2,
    animal: 'Gato',
    src: cat1,
    alt: 'Luna',
  },
  {
    id: 2,
    name: 'Roco',
    age: 7,
    animal: 'Perro',
    src: dog1,
    alt: 'Roco',
  },
  {
    id: 3,
    name: 'Miel',
    age: 1,
    animal: 'Gato',
    src: cat3,
    alt: 'Miel',
  },

  {
    id: 4,
    name: 'Brisa',
    age: 3,
    animal: 'Perro',
    src: dog2,
    alt: 'Brisa',
  },
  {
    id: 5,
    name: 'Felix',
    age: 3,
    animal: 'Gato',
    src: cat2,
    alt: 'Felix',
  },

  {
    id: 6,
    name: 'Negro',
    age: 1,
    animal: 'Perro',
    src: dog3,
    alt: 'Negrito',
  },
  {
    id: 7,
    name: 'Tito',
    age: '1 Mes',
    animal: 'Gato',
    src: cat4,
    alt: 'Tito',
  },
  {
    id: 8,
    name: 'Pocho',
    age: 5,
    animal: 'Perro',
    src: dog4,
    alt: 'Pocho',
  },
];
