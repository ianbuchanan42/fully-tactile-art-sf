'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

export default function Navigation() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const isActive = (path: string) => {
    return pathname === path
      ? 'text-blue-600 font-semibold'
      : 'hover:text-blue-500';
  };

  return (
    <header className='bg-white py-4 shadow-sm'>
      <div className='container mx-auto px-4 flex justify-between items-center'>
        <Link href='/' className='text-xl font-bold'>
          Fully Tactile Art SF
        </Link>

        {/* Mobile menu button */}
        <button
          className='md:hidden p-2 focus:outline-none'
          onClick={toggleMenu}
          aria-label={
            isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'
          }
          aria-controls='mobile-menu'
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
            className='h-6 w-6'
            aria-hidden='true'
          >
            {isMenuOpen ? (
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M6 18L18 6M6 6l12 12'
              />
            ) : (
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M4 6h16M4 12h16M4 18h16'
              />
            )}
          </svg>
        </button>

        {/* Desktop navigation */}
        <nav className='hidden md:block' aria-label='Main navigation'>
          <ul className='flex space-x-8'>
            <li>
              <Link href='/' className={`${isActive('/')} transition-colors`}>
                Home
              </Link>
            </li>
            <li>
              <Link
                href='/past-events'
                className={`${isActive('/past-events')} transition-colors`}
              >
                Past Events
              </Link>
            </li>

            <li>
              <Link
                href='/testimonials'
                className={`${isActive('/testimonials')} transition-colors`}
              >
                Testimonials
              </Link>
            </li>
            <li>
              <Link
                href='/about'
                className={`${isActive('/about')} transition-colors`}
              >
                About
              </Link>
            </li>
          </ul>
        </nav>
      </div>

      {/* Mobile navigation */}
      {isMenuOpen && (
        <nav
          id='mobile-menu'
          className='md:hidden px-4 pt-2 pb-4 border-t'
          aria-label='Mobile navigation'
        >
          <ul className='flex flex-col space-y-3'>
            <li>
              <Link
                href='/'
                className={`${isActive(
                  '/'
                )} block py-2 px-3 rounded transition-colors`}
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href='/past-events'
                className={`${isActive(
                  '/past-events'
                )} block py-2 px-3 rounded transition-colors`}
                onClick={() => setIsMenuOpen(false)}
              >
                Past Events
              </Link>
            </li>
            <li>
              <Link
                href='/testimonials'
                className={`${isActive(
                  '/testimonials'
                )} block py-2 px-3 rounded transition-colors`}
                onClick={() => setIsMenuOpen(false)}
              >
                Testimonials
              </Link>
            </li>
            <li>
              <Link
                href='/about'
                className={`${isActive(
                  '/about'
                )} block py-2 px-3 rounded transition-colors`}
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
