import Image from 'next/image';
import { Event } from '@/types';

interface EventWithImageProps {
  event: Event;
  imagePath: string;
  imageAlt: string;
  imagePosition?: 'left' | 'right';
}

export default function EventWithImage({
  event,
  imagePath,
  imageAlt,
  imagePosition = 'left',
}: EventWithImageProps) {
  // Determine layout classes based on image position
  const containerClasses = 'mb-12 pb-6 border-b';
  const layoutClasses = `md:grid md:gap-6 md:grid-cols-5 items-start ${
    imagePosition === 'right' ? 'md:grid-flow-dense' : ''
  }`;

  // Image column classes
  const imageColumnClasses = `md:col-span-2 ${
    imagePosition === 'right' ? 'md:col-start-4' : 'md:col-start-1'
  }`;

  // Content column classes
  const contentColumnClasses = `md:col-span-3 ${
    imagePosition === 'right' ? 'md:col-start-1' : 'md:col-start-3'
  }`;

  return (
    <article
      className={`${containerClasses}`}
      aria-labelledby={`event-title-${event.id}`}
    >
      <div className={layoutClasses}>
        {/* Image Container */}
        <figure className={`${imageColumnClasses} mb-6 md:mb-0`}>
          <div className='relative aspect-[4/3] w-full overflow-hidden rounded-lg shadow-md'>
            <Image
              src={imagePath}
              alt={imageAlt}
              fill
              sizes='(max-width: 768px) 100vw, 400px'
              className='object-cover hover:scale-105 transition-transform duration-300'
              priority={false}
            />
          </div>
          <figcaption className='sr-only'>{imageAlt}</figcaption>
        </figure>

        {/* Event Content */}
        <section
          className={contentColumnClasses}
          aria-labelledby={`event-title-${event.id}`}
        >
          <header>
            <h2
              id={`event-title-${event.id}`}
              className='text-xl font-medium mb-2'
            >
              {event.title}
            </h2>
          </header>

          <dl className='space-y-1 mb-3'>
            <div>
              <dt className='inline font-bold'>Date: </dt>
              <dd className='inline'>{event.date}</dd>
            </div>
            <div>
              <dt className='inline font-bold'>Location: </dt>
              <dd className='inline'>{event.location}</dd>
            </div>
            {event.time && (
              <div>
                <dt className='inline font-bold'>Time: </dt>
                <dd className='inline'>{event.time}</dd>
              </div>
            )}
          </dl>

          <div className='mb-4'>
            <p>{event.description}</p>
          </div>

          {/* Grant-related information */}
          {(event.attendanceCount ||
            event.artistCount ||
            (event.grantSupport && event.grantSupport.length > 0)) && (
            <footer className='mt-4' aria-label='Event statistics'>
              <h3 className='text-sm font-semibold mb-2 sr-only'>
                Event Details
              </h3>
              <dl className='space-y-2 text-sm'>
                {event.attendanceCount && (
                  <div className='flex gap-1'>
                    <dt className='font-bold'>Attendance:</dt>
                    <dd>{event.attendanceCount} visitors</dd>
                  </div>
                )}
                {event.artistCount && (
                  <div className='flex gap-1'>
                    <dt className='font-bold'>Artists Involved:</dt>
                    <dd>{event.artistCount}</dd>
                  </div>
                )}
                {event.grantSupport && event.grantSupport.length > 0 && (
                  <div className='flex gap-1'>
                    <dt className='font-bold'>Supported By:</dt>
                    <dd>{event.grantSupport.join(', ')}</dd>
                  </div>
                )}
              </dl>
            </footer>
          )}
        </section>
      </div>
    </article>
  );
}
