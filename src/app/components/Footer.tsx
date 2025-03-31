import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className='bg-gray-100 py-8 mt-12' role='contentinfo'>
      <div className='container mx-auto px-4'>
        <div className='md:flex md:justify-between'>
          <section
            aria-labelledby='support-heading'
            className='md:w-1/2 mb-6 md:mb-0'
          >
            <h2 id='support-heading' className='text-xl font-semibold mb-4'>
              Support Our Work
            </h2>
            <div className='mb-4'>
              <Link
                href='https://www.flipcause.com/secure/cause_pdetails/MTc3NjU0'
                className='inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition'
                target='_blank'
                rel='noopener noreferrer'
              >
                Donate to Support Fully Tactile Art SF
              </Link>
            </div>
            <p className='text-lg font-medium mb-5'>
              Be a part of the tactile art revolution!
            </p>

            <div className='mt-6'>
              <h3 className='text-md font-medium mb-2'>Connect With Us</h3>
              <ul className='flex space-x-4'>
                <li>
                  <Link
                    href='https://www.instagram.com/fullytactileartsf/'
                    target='_blank'
                    rel='noopener noreferrer'
                    aria-label='Follow us on Instagram'
                    className='text-gray-700 hover:text-blue-500 transition'
                  >
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width='24'
                      height='24'
                      viewBox='0 0 24 24'
                      fill='currentColor'
                      aria-hidden='true'
                      className='h-6 w-6'
                    >
                      <path d='M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z' />
                    </svg>
                  </Link>
                </li>
              </ul>
            </div>
          </section>

          <section
            aria-labelledby='fiscal-sponsor-heading'
            className='md:w-1/2'
          >
            <div className='flex items-center mb-4'>
              <figure className='mr-4'>
                <Image
                  src='/intersection-logo.png'
                  alt='Intersection for the Arts logo'
                  width={300}
                  height={120}
                  className='rounded'
                />
              </figure>
              <div>
                <h2 id='fiscal-sponsor-heading' className='font-semibold'>
                  Fiscal Sponsorship
                </h2>
                <p>Proudly fiscally sponsored by Intersection for the Arts</p>
              </div>
            </div>
            <div className='space-y-4'>
              <p>
                We are fiscally sponsored by Intersection for the Arts, a
                501(c)(3) nonprofit organization, which allows us to offer you
                tax deductions for your contributions.
              </p>
              <address className='not-italic'>
                Please make checks payable to{' '}
                <strong>Intersection for the Arts</strong>, and write
                <strong> Fully Tactile Art Exhibition</strong> in the memo line.
                This ensures that you&apos;ll receive an acknowledgement letter
                for tax purposes, and your donation will be available for our
                project.
              </address>
            </div>
          </section>
        </div>

        <div className='border-t border-gray-300 mt-6 pt-6 text-center text-sm text-gray-600'>
          <small>
            &copy; {new Date().getFullYear()} Fully Tactile Art SF. All rights
            reserved.
          </small>
        </div>
      </div>
    </footer>
  );
}
