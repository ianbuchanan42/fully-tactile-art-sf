'use client';

import Image from 'next/image';
import { Event } from '@/types';
import { useState } from 'react';

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
  const [imageError, setImageError] = useState(false);

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
    <article className={`${containerClasses}`}>
      <div className={layoutClasses}>
        {/* Image Container */}
        <div className={`${imageColumnClasses} mb-6 md:mb-0`}>
          <div className='relative aspect-[4/3] w-full overflow-hidden rounded-lg shadow-md'>
            <Image
              src={imagePath}
              alt={imageAlt}
              fill
              sizes='(max-width: 768px) 100vw, 400px'
              className='object-cover hover:scale-105 transition-transform duration-300'
              onError={() => setImageError(true)}
              style={{ display: imageError ? 'none' : 'block' }}
            />
            {imageError && (
              <div className='w-full h-full bg-gray-200 flex items-center justify-center p-4 text-center text-gray-500'>
                <span>Image not available</span>
              </div>
            )}
          </div>
        </div>

        {/* Event Content */}
        <div className={contentColumnClasses}>
          <h3 className='text-xl font-medium mb-2'>{event.title}</h3>

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

          <p className='mb-4'>{event.description}</p>

          {/* Grant-related information */}
          <div className='mt-4 space-y-2 text-sm'>
            {event.attendanceCount && (
              <div className='flex gap-1'>
                <span className='font-bold'>Attendance:</span>
                <span>{event.attendanceCount} visitors</span>
              </div>
            )}
            {event.artistCount && (
              <div className='flex gap-1'>
                <span className='font-bold'>Artists Involved:</span>
                <span>{event.artistCount}</span>
              </div>
            )}
            {event.grantSupport && event.grantSupport.length > 0 && (
              <div className='flex gap-1'>
                <span className='font-bold'>Supported By:</span>
                <span>{event.grantSupport.join(', ')}</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}
