import Image from 'next/image';
import Link from 'next/link';
import Logo from '@/assets/logo.svg';
import { Londrina_Solid } from 'next/font/google';
import type { NavProps } from '@/components/navbar//navbar-types';

const londrina_solid = Londrina_Solid({
  weight: ['400', '900'],
  style: 'normal',
});

const navItems: NavProps[] = [
  { href: '/about', label: 'Nosotros' },
  { href: '/services', label: 'Servicios' },
  { href: '/pets', label: 'Mascotas' },
  { href: '/faq', label: 'FAQ' },
  { href: '/contact', label: 'Contacto' },
];

export default function Navbar() {
  return (
    <nav className='navbar bg-accent shadow-sm px-0'>
      <div className='navbar-start '>
        <Link
          href='/'
          className={`flex items-center gap-2 text-3xl font-normal ml-32 ${londrina_solid.className}`}
        >
          <Image src={Logo} alt='Logo' width={58} height={58}></Image>
          Arrecifes Adopta
        </Link>
      </div>
      <div className='navbar-center hidden lg:flex'>
        <ul className='menu menu-horizontal px-1 text-base font-medium'>
          {navItems.map((item) => (
            <li key={item.href}>
              <Link href={item.href}>{item.label}</Link>
            </li>
          ))}
        </ul>
      </div>
      <div className='navbar-end'>
        <div className='dropdown dropdown-end'>
          <div tabIndex={0} role='button' className='btn btn-ghost lg:hidden'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-5 w-5'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M4 6h16M4 12h8m-8 6h16'
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className='menu dropdown-content bg-accent z-1 mt-5.5 w-52 p-2 shadow text-base font-medium'
          >
            {navItems.map((item) => (
              <li key={item.href}>
                <Link href={item.href}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}
