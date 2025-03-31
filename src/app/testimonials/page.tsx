import { Testimonial } from '@/types';
import { testimonials } from '@/data/testimonials';
import Link from 'next/link';
import PageBanner from '../components/PageBanner';

export const metadata = {
  title: 'Testimonials | Fully Tactile Art SF',
  description:
    'Hear from visitors, artists, and educators about their experiences with tactile art and accessibility.',
};

export default function TestimonialsPage() {
  return (
    <>
      <PageBanner
        imagePath='/images/banners/testimonials-banner.jpg'
        imageAlt='Visitors sharing experiences at a Fully Tactile Art SF exhibition'
        title='Testimonials'
        subtitle='Stories and experiences from our community'
        align='left'
      />

      <div className='container mx-auto p-4'>
        <main>
          <p className='mb-8 text-lg'>
            Hear from visitors, artists, and educators who have experienced our
            tactile art exhibitions and events. These testimonials highlight the
            impact and importance of creating accessible art experiences.
          </p>

          <section aria-labelledby='testimonials-heading'>
            <h2 id='testimonials-heading' className='sr-only'>
              Collection of Testimonials
            </h2>
            <ul className='grid gap-8 md:grid-cols-2 list-none p-0'>
              {testimonials.map((testimonial: Testimonial) => (
                <li key={testimonial.id}>
                  <article className='bg-gray-50 p-6 rounded-lg'>
                    {testimonial.question && (
                      <h3 className='text-xl font-medium mb-3 text-blue-700'>
                        {testimonial.question}
                      </h3>
                    )}

                    <blockquote className='italic mb-4 relative pl-4 border-l-4 border-gray-200'>
                      <p className='mb-2'>{testimonial.quote}</p>
                      <footer className='text-right font-medium'>
                        <cite>— {testimonial.name}</cite>
                      </footer>
                    </blockquote>
                  </article>
                </li>
              ))}
            </ul>
          </section>

          <nav className='mt-10' aria-label='Related pages'>
            <Link href='/past-events' className='text-blue-500 hover:underline'>
              View Our Past Events
            </Link>
          </nav>
        </main>
      </div>
    </>
  );
}
