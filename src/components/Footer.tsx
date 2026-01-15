import Image from 'next/image';
import Logo from '@/assets/logo.svg';
import Link from 'next/link';
import { Londrina_Solid } from 'next/font/google';

const londrina_solid = Londrina_Solid({
  weight: ['400', '900'],
  style: 'normal',
});

function Footer() {
  return (
    <footer className='flex flex-col justify-center items-center bg-accent p-4'>
      <Link
        href='/'
        className={`flex items-center gap-2 text-3xl font-normal mb-4 ${londrina_solid.className}`}
      >
        <Image
          src={Logo}
          alt='Logo'
          width={58}
          height={58}
          className='w-[58px]! h-[58px]!'
        ></Image>
        Arrecifes Adopta
      </Link>
      <p>
        © {new Date().getFullYear()} Desarrollado por {''}
        <a
          href='https://github.com/jlemes1'
          target='_blank'
          rel='noreferrer noopener'
          className='underline'
        >
          Juan Lemes
        </a>
        . Imágenes de Freepik.
      </p>
    </footer>
  );
}

export default Footer;
