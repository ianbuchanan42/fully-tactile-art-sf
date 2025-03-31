import { Event } from '@/types';
import { events } from '@/data/events';
import Link from 'next/link';
import PageBanner from '../components/PageBanner';

export const metadata = {
  title: 'Past Events | Fully Tactile Art SF',
  description:
    'Explore our archive of past tactile art events, exhibitions, and workshops in San Francisco.',
};

export default function PastEventsPage() {
  const pastEvents = events.filter((event) => event.isPast);

  return (
    <>
      <PageBanner
        imagePath='/images/banners/past-events-banner.jpg'
        imageAlt='Archive of past tactile art exhibitions and events'
        title='Past Events'
        subtitle='Exploring our history of tactile art experiences'
        align='center'
        overlayOpacity={0.6}
      />

      <div className='container mx-auto p-4'>
        {pastEvents.length > 0 ? (
          <section className='mb-10'>
            <div className='grid gap-8'>
              {pastEvents.map((event: Event) => (
                <div key={event.id} className='border-b pb-6'>
                  <h3 className='text-xl font-medium mb-2'>{event.title}</h3>
                  <p className='mb-1'>
                    <strong>Date:</strong> {event.date}
                  </p>
                  <p className='mb-1'>
                    <strong>Location:</strong> {event.location}
                  </p>
                  {event.time && (
                    <p className='mb-1'>
                      <strong>Time:</strong> {event.time}
                    </p>
                  )}
                  <p className='mb-4'>{event.description}</p>

                  {/* Grant-related information */}
                  <div className='mt-4 space-y-2 text-sm'>
                    {event.attendanceCount && (
                      <p>
                        <strong>Attendance:</strong> {event.attendanceCount}{' '}
                        visitors
                      </p>
                    )}
                    {event.artistCount && (
                      <p>
                        <strong>Artists Involved:</strong> {event.artistCount}
                      </p>
                    )}
                    {event.grantSupport && event.grantSupport.length > 0 && (
                      <p>
                        <strong>Supported By:</strong>{' '}
                        {event.grantSupport.join(', ')}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </section>
        ) : (
          <div className='my-8 p-6 bg-gray-50 rounded-lg'>
            <p>We haven&apos;t held any events yet. Check back soon!</p>
          </div>
        )}

        <div className='mt-8'>
          <Link href='/testimonials' className='text-blue-500 hover:underline'>
            Read Testimonials
          </Link>
        </div>

        <section className='mt-12'>
          <h2 className='text-2xl font-semibold mb-4'>Event Archive</h2>
          <p>
            Our events bring together artists, visitors, and the visually
            impaired community to explore tactile art in a welcoming
            environment. Through workshops, exhibitions, and presentations, we
            create spaces where art can be experienced through touch.
          </p>
          <p className='mt-4'>
            If you&apos;d like to propose an event or participate in a future
            exhibition, please{' '}
            <Link href='/contact' className='text-blue-500 hover:underline'>
              contact us
            </Link>
            .
          </p>
        </section>
      </div>
    </>
  );
}
