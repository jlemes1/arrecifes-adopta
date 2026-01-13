import Image from 'next/image';
import { Pet } from '@/types/pet';
import { PawPrint } from 'lucide-react';
import Link from 'next/link';

export default function PetCard({ age, alt, animal, name, src, id }: Pet) {
  return (
    <div className='card bg-base-200  w-96 h-auto shadow-sm rounded-none border border-accent'>
      <figure className=' relative w-full h-56 overflow-hidden'>
        <Image src={src} alt={alt} fill className='object-center' />
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
          <Link className='btn btn-primary' href={`/pets/${id}`}>
            Adoptar <PawPrint size={18} />
          </Link>
        </div>
      </div>
    </div>
  );
}
