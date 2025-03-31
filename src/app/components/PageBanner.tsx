'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';

interface PageBannerProps {
  imagePath: string;
  imageAlt: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center' | 'right';
  overlayOpacity?: number; // 0 to 1
  textBgOpacity?: number; // 0 to 1
}

export default function PageBanner({
  imagePath,
  imageAlt,
  title,
  subtitle,
  align = 'center',
  overlayOpacity = 0.5,
  textBgOpacity = 0.85,
}: PageBannerProps) {
  const [isMounted, setIsMounted] = useState(false);

  // Prevent hydration mismatch
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Calculate text alignment classes
  const getAlignmentClasses = () => {
    switch (align) {
      case 'left':
        return 'text-left items-start';
      case 'right':
        return 'text-right items-end';
      default:
        return 'text-center items-center';
    }
  };

  // Handle opacity for the overlay
  const overlayStyle = {
    backgroundColor: `rgba(0, 0, 0, ${overlayOpacity})`,
  };

  // Handle opacity for the text background
  const textBgStyle = {
    backgroundColor: `rgba(255, 255, 255, ${textBgOpacity})`,
  };

  // Don't render anything during initial hydration
  if (!isMounted) {
    return null;
  }

  return (
    <section
      className='relative w-full overflow-hidden'
      aria-labelledby='page-banner-title'
    >
      {/* Image container with aspect ratio */}
      <div className='relative w-full h-[200px] sm:h-[250px] md:h-[300px] lg:h-[350px] xl:h-[400px]'>
        <Image
          src={imagePath}
          alt={imageAlt}
          fill
          priority
          sizes='100vw'
          className='object-cover'
          style={{ objectPosition: 'center center' }}
        />
        {/* Dark overlay */}
        <div
          className='absolute inset-0 flex flex-col justify-center px-4 md:px-8'
          style={overlayStyle}
        >
          <div
            className={`max-w-6xl mx-auto w-full flex flex-col ${getAlignmentClasses()}`}
          >
            <div
              className='inline-block px-6 py-4 rounded-lg shadow-md'
              style={textBgStyle}
            >
              <h1
                id='page-banner-title'
                className='text-gray-900 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold'
              >
                {title}
              </h1>
              {subtitle && (
                <p className='text-gray-700 text-sm sm:text-base md:text-lg lg:text-xl mt-2 md:mt-4 max-w-3xl'>
                  {subtitle}
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
