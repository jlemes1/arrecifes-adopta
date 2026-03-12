'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { logout } from './actions';
import { FileText, CheckCircle, Heart, History, LogOut } from 'lucide-react';

const sidebarLinks = [
  {
    href: '/admin/publications',
    label: 'Solicitudes de publicación',
    icon: FileText,
  },
  {
    href: '/admin/approved',
    label: 'Mascotas aprobadas',
    icon: CheckCircle,
  },
  {
    href: '/admin/adoptions',
    label: 'Solicitudes de adopción',
    icon: Heart,
  },
  {
    href: '/admin/history',
    label: 'Historial de adopción',
    icon: History,
  },
];

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <div className='flex flex-col min-h-screen'>
      {/* Header */}
      <header className='navbar bg-accent  shadow-md px-4 sm:px-8'>
        <div className='navbar-start'>
          <h1 className='text-xl sm:text-2xl font-bold'>Panel Administrador</h1>
        </div>
        <div className='navbar-end'>
          <button
            onClick={() => logout()}
            className='btn btn-accent text-neutral text-lg gap-2'
          >
            <LogOut size={18} />
            Cerrar sesión
          </button>
        </div>
      </header>

      <div className='flex flex-1'>
        {/* Sidebar */}
        <aside className='w-64 bg-base-100 border-r border-accent hidden lg:block'>
          <ul className='menu p-4 gap-1'>
            {sidebarLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`flex items-center gap-3 font-medium ${
                      isActive
                        ? 'bg-accent text-white hover:bg-accent'
                        : 'text-accent hover:bg-accent/10'
                    }`}
                  >
                    <link.icon size={18} />
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </aside>

        {/* Mobile nav */}
        <div className='lg:hidden w-full'>
          <div className='flex overflow-x-auto border-b border-accent/20 bg-base-100'>
            {sidebarLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`flex items-center gap-2 px-4 py-3 text-sm font-medium whitespace-nowrap border-b-2 ${
                    isActive
                      ? 'border-accent text-accent'
                      : 'border-transparent text-neutral hover:text-accent'
                  }`}
                >
                  <link.icon size={16} />
                  {link.label}
                </Link>
              );
            })}
          </div>
          <main className='p-4 sm:p-6 bg-base-200 flex-1'>{children}</main>
        </div>

        {/* Desktop */}
        <main className='flex-1 p-6 sm:p-8 bg-base-200 hidden lg:block'>
          {children}
        </main>
      </div>
    </div>
  );
}
