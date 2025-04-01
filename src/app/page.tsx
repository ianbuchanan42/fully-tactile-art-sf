// app/page.tsx
import Link from 'next/link';
import { events } from '@/data/events';
import PageBanner from './components/PageBanner';

export default function Home() {
  // Get the next upcoming event
  const nextEvent = events.find((event) => !event.isPast);

  return (
    <>
      <PageBanner
        imagePath='/images/banners/home-banner.jpg'
        imageAlt='A person touching a tactile art piece at Fully Tactile Art SF'
        title='Fully Tactile Art SF'
        subtitle='Celebrating the art of touch and accessibility'
        align='left'
      />

      <article className='container mx-auto p-4'>
        <div className='content'>
          {nextEvent ? (
            <section
              id='upcoming-event'
              className='mb-12'
              aria-labelledby='upcoming-event-heading'
            >
              <h2
                id='upcoming-event-heading'
                className='text-2xl font-semibold mb-4'
              >
                Upcoming Event: {nextEvent.title}
              </h2>
              <dl className='space-y-2'>
                <div>
                  <dt className='inline font-bold'>Date: </dt>
                  <dd className='inline'>{nextEvent.date}</dd>
                </div>
                <div>
                  <dt className='inline font-bold'>Location: </dt>
                  <dd className='inline'>{nextEvent.location}</dd>
                </div>
                {nextEvent.time && (
                  <div>
                    <dt className='inline font-bold'>Time: </dt>
                    <dd className='inline'>{nextEvent.time}</dd>
                  </div>
                )}
              </dl>
              <p className='mt-4'>{nextEvent.description}</p>
              <nav className='mt-4' aria-label='Event related pages'>
                <ul className='flex space-x-4 list-none p-0'>
                  <li>
                    <Link
                      href='/testimonials'
                      className='inline-block text-blue-500 hover:underline'
                    >
                      Read Testimonials
                    </Link>
                  </li>
                  <li>
                    <Link
                      href='/past-events'
                      className='inline-block text-blue-500 hover:underline'
                    >
                      View Past Events
                    </Link>
                  </li>
                </ul>
              </nav>
            </section>
          ) : (
            <section
              id='no-events'
              className='mb-12'
              aria-labelledby='upcoming-events-heading'
            >
              <h2
                id='upcoming-events-heading'
                className='text-2xl font-semibold mb-4'
              >
                Upcoming Events
              </h2>
              <p>
                We don&apos;t have any upcoming events scheduled at the moment.
                Please check back soon!
              </p>
              <nav className='mt-4' aria-label='Related pages'>
                <ul className='flex space-x-4 list-none p-0'>
                  <li>
                    <Link
                      href='/testimonials'
                      className='inline-block text-blue-500 hover:underline'
                    >
                      Read Testimonials
                    </Link>
                  </li>
                  <li>
                    <Link
                      href='/past-events'
                      className='inline-block text-blue-500 hover:underline'
                    >
                      View Past Events
                    </Link>
                  </li>
                </ul>
              </nav>
            </section>
          )}

          <section
            id='why-tactile-art'
            className='mb-12'
            aria-labelledby='why-tactile-art-heading'
          >
            <h2
              id='why-tactile-art-heading'
              className='text-2xl font-semibold mb-4'
            >
              Why Tactile Art?
            </h2>
            <p>
              Fully Tactile Art SF is dedicated to expanding the boundaries of
              art by engaging not only the visual sense, but also the sense of
              touch. Explore how art can be a multi-sensory experience.
            </p>
            <Link
              href='/about'
              className='mt-4 inline-block text-blue-500 hover:underline'
            >
              Learn More About Fully Tactile Art SF
            </Link>
          </section>

          <section
            id='instagram-section'
            className='mb-12 bg-gray-800 text-white rounded-lg p-6'
            aria-labelledby='instagram-heading'
          >
            <div className='md:flex md:items-center md:justify-between'>
              <div className='md:w-3/4'>
                <h2
                  id='instagram-heading'
                  className='text-2xl font-semibold mb-3'
                >
                  Follow Our Journey on Instagram
                </h2>
                <p className='mb-4 text-gray-200'>
                  Stay updated with our latest events, behind-the-scenes
                  content, and community stories. Join our growing community of
                  tactile art enthusiasts!
                </p>
                <Link
                  href='https://www.instagram.com/fullytactileartsf/'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='inline-flex items-center px-5 py-3 bg-white text-gray-800 font-semibold rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 transition'
                  aria-label='Follow Fully Tactile Art SF on Instagram'
                >
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 24 24'
                    fill='currentColor'
                    className='w-5 h-5 mr-2'
                    aria-hidden='true'
                    focusable='false'
                  >
                    <path d='M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z' />
                  </svg>
                  <span>@fullytactileartsf</span>
                </Link>
              </div>
              <figure className='hidden md:block md:w-1/4 mt-6 md:mt-0'>
                <div
                  className='bg-white p-2 rounded-lg shadow-lg transform rotate-3'
                  aria-hidden='true'
                >
                  <svg
                    viewBox='0 0 24 24'
                    className='w-32 h-32 mx-auto text-gray-700'
                    fill='currentColor'
                    aria-hidden='true'
                    focusable='false'
                  >
                    <path d='M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z' />
                  </svg>
                </div>
              </figure>
            </div>
          </section>
        </div>
      </article>
    </>
  );
}
