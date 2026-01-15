import Image from 'next/image';
import Link from 'next/link';
import dogs from '@/assets/dogs.png';

export default function About() {
  return (
    <>
      <section className='bg-accent flex flex-col lg:flex-row items-center lg:items-end justify-between px-4 sm:px-12 lg:px-72 pt-8 lg:pt-0 '>
        <div className='pb-8 lg:pb-12 text-center lg:text-left'>
          <h1 className='text-4xl sm:text-5xl lg:text-6xl font-bold mb-4'>
            Nosotros
          </h1>
          <Link href='/' className='font-medium'>
            Volver
          </Link>
        </div>
        <Image
          width={400}
          height={400}
          src={dogs}
          alt='Dogs'
          className='w-64 sm:w-80 lg:w-[500px] h-auto'
        ></Image>
      </section>

      <section className='flex items-center justify-center px-6 sm:px-8 h-[calc(100vh-450px)]'>
        <div className='max-w-4xl'>
          <p className='text-base sm:text-lg lg:text-xl font-medium'>
            Arrecifes Adopta es una plataforma creada para conectar a personas
            que buscan dar en adopción a sus mascotas con quienes desean
            ofrecerles un nuevo hogar. Nuestro objetivo es brindar un espacio
            seguro, accesible y transparente para que cada animal encuentre una
            familia responsable y amorosa.
          </p>
          <p className='text-base sm:text-lg lg:text-xl font-medium py-6'>
            Esta web surgió con la idea de facilitar el proceso de adopción,
            permitir que cualquier persona pueda publicar a su mascota y ayudar
            a quienes buscan un compañero de vida. Trabajamos para que la
            experiencia sea sencilla, responsable y guiada por el bienestar
            animal.
          </p>
        </div>
      </section>
    </>
  );
}
