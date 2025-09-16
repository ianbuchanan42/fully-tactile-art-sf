import { Event } from '@/types';
import { events } from '@/data/events';
import Link from 'next/link';
import EventSchedule from '@/components/EventSchedule';

export const metadata = {
  title: 'Upcoming Events | Fully Tactile Art SF',
  description:
    'Discover upcoming tactile art events, exhibitions, and workshops in San Francisco.',
};

export default function EventsPage() {
  const upcomingEvents = events.filter((event) => !event.isPast);

  return (
    <div className='container mx-auto p-4'>
      <h1 className='text-4xl font-bold mb-6'>Upcoming Events</h1>

      {upcomingEvents.length > 0 ? (
        <section className='mb-10'>
          {upcomingEvents.map((event: Event) => (
            <div key={event.id} className='bg-gray-50 p-6 rounded-lg mb-8'>
              <h3 className='text-xl font-medium mb-2'>{event.title}</h3>
              <p className='mb-2'>
                <strong>Date:</strong> {event.date}
              </p>
              <p className='mb-2'>
                <strong>Location:</strong> {event.location}
              </p>
              {event.time && !event.schedule && (
                <p className='mb-2'>
                  <strong>Time:</strong> {event.time}
                </p>
              )}

              {/* Show structured schedule if available */}
              {event.schedule && (
                <div className='mb-4'>
                  <EventSchedule schedule={event.schedule} />
                </div>
              )}

              <p className='mb-4'>{event.description}</p>
              <p className='italic text-sm'>
                Free admission. Donations welcome.
              </p>
            </div>
          ))}
        </section>
      ) : (
        <div className='my-8 p-6 bg-gray-50 rounded-lg'>
          <p className='mb-4'>
            We don&apos;t have any upcoming events scheduled at the moment.
          </p>
          <p>
            Please check back soon or sign up for our newsletter to be notified
            of future events.
          </p>
        </div>
      )}

      <div className='flex justify-between items-center'>
        <Link href='/past-events' className='text-blue-500 hover:underline'>
          View Past Events
        </Link>

        <section className='max-w-md'>
          <h2 className='text-xl font-semibold mb-3'>Get Notified</h2>
          <p className='text-sm'>
            Join our mailing list to receive updates about upcoming events and
            exhibitions. Email us at{' '}
            <a
              href='mailto:info@fullytactileartf.org'
              className='text-blue-500 hover:underline'
            >
              info@fullytactileartf.org
            </a>{' '}
            to be added to our list.
          </p>
        </section>
      </div>
    </div>
  );
}
