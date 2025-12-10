import { Undo2 } from 'lucide-react';
import Link from 'next/link';

export default function NotFound() {
  return (
    <section className='hero bg-base-200 min-h-screen'>
      <div className='hero-content text-center'>
        <div className=''>
          <h1 className='text-9xl font-bold'>404</h1>
          <p className='py-6 text-7xl fondt-bold'>Página no encontrada.</p>
          <Link href='/' className='btn btn-accent text-base-100'>
            <Undo2 />
            Volver
          </Link>
        </div>
      </div>
    </section>
  );
}
