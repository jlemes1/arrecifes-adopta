import Link from 'next/link';
import PetCard from '@/components/PetCard';
import { petsData } from '@/utils/petsData';

export default function Pets() {
  return (
    <div>
      <div className='bg-accent flex flex-col lg:flex-row items-center justify-between px-4 sm:px-12 lg:px-72 pt-8 pb-16 lg:pt-20 '>
        <div className='pb-4 lg:pb-12 text-center lg:text-left'>
          <h1 className='text-4xl sm:text-5xl lg:text-6xl font-bold mb-4'>
            Mascotas
          </h1>
          <Link href='/' className='font-medium flex gap-1'>
            Volver
          </Link>
        </div>
      </div>

      <div className='bg-base-200 grid grid-cols-1 lg:grid-cols-4 gap-8 px-24 py-12 justify-items-center place-content-center'>
        {petsData.map((petData) => (
          <PetCard key={petData.id} {...petData} />
        ))}
      </div>
    </div>
  );
}
