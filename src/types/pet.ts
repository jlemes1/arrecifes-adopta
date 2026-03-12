export type Animal = 'Perro' | 'Gato';
export type PetStatus = 'pending' | 'approved';

export type Pet = {
  id: number;
  name: string;
  age: string;
  animal: Animal;
  src: string;
  alt: string;
  status: PetStatus;
  adopted: boolean;
  created_at: string;
  contact_name: string;
  contact_email: string;
  contact_phone: string;
};
