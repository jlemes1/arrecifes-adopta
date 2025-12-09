import { StaticImageData } from 'next/image';

export type Animal = 'Perro' | 'Gato';

export type Pet = {
  id: number;
  name: string;
  age: number | string;
  animal: Animal;
  src: StaticImageData | string;
  alt: string;
};
