import { Event } from '@/types';
import { events } from '@/data/events';
import Link from 'next/link';
import PageBanner from '@/components/PageBanner';
import EventWithImage from '@/components/EventWithImage';

export const metadata = {
  title: 'Past Events | Fully Tactile Art SF',
  description:
    'Explore our archive of past tactile art events, exhibitions, and workshops in San Francisco.',
};

// Example function to generate consistent image paths for events
function getEventImagePath(event: Event): string {
  // In a real implementation, you would have a more robust way to map events to images
  // This is a simple example that uses the event ID to reference images
  return `/images/events/${event.id}.jpg`;
}

// Example function to generate descriptive alt text for event images
function getEventImageAlt(event: Event): string {
  return `${event.title} - Tactile art exhibition at ${event.location}`;
}

export default function PastEventsPage() {
  const pastEvents = events.filter((event) => event.isPast);

  return (
    <>
      <PageBanner
        imagePath='/images/banners/past-events-banner.jpg'
        imageAlt='Archive of past tactile art exhibitions and events'
        title='Past Events'
        subtitle='Exploring our history of tactile art experiences'
        align='left'
        overlayOpacity={0.6}
      />

      <div className='container mx-auto p-4'>
        {pastEvents.length > 0 ? (
          <section className='mb-10'>
            {pastEvents.map((event: Event, index: number) => (
              <EventWithImage
                key={event.id}
                event={event}
                imagePath={getEventImagePath(event)}
                imageAlt={getEventImageAlt(event)}
                imagePosition={index % 2 === 0 ? 'left' : 'right'}
              />
            ))}
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
