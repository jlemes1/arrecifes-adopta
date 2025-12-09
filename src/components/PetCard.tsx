import Image from 'next/image';
import { Pet } from '@/types/pet';
import { PawPrint } from 'lucide-react';

export default function PetCard({ age, alt, animal, name, src }: Pet) {
  return (
    <div className='card bg-base-200  w-96 h-full shadow-sm rounded-none border border-accent'>
      <figure className='w-full h-72 overflow-hidden'>
        <Image src={src} alt={alt} className='object-center h-full w-full' />
      </figure>
      <div className='card-body gap-0 p-4'>
        <h2 className='card-title flex justify-center text-2xl font-bold '>
          {name}
        </h2>
        <p>
          <span className='font-bold'>Animal:</span> {animal}
        </p>
        <p>
          <span className='font-bold'>Edad:</span> {age}
        </p>
        <div className='card-actions justify-end '>
          <button className='btn btn-primary'>
            Adoptar <PawPrint size={18} />
          </button>
        </div>
      </div>
    </div>
  );
}
