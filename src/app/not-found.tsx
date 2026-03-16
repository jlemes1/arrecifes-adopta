import Link from 'next/link';
import { CircleArrowLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <section className='hero bg-base-200 h-[calc(100vh-200px)]'>
      <div className='hero-content text-center'>
        <div className=''>
          <h1 className='text-9xl font-bold'>404</h1>
          <p className='py-6 text-7xl'>Página no encontrada.</p>
          <Link href='/' className='btn btn-accent text-base-100'>
            <CircleArrowLeft />
            Volver
          </Link>
        </div>
      </div>
    </section>
  );
}
