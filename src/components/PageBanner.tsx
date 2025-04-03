import Image from 'next/image';
import {
  getAlignmentClasses,
  getBlackOverlayClass,
  getWhiteOverlayClass,
} from '@/utils/tailwind-helpers';

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
  // Generate a unique ID for accessibility
  const headingId = `page-banner-title-${title
    .replace(/\s+/g, '-')
    .toLowerCase()}`;

  return (
    <header
      className='relative w-full overflow-hidden'
      aria-labelledby={headingId}
      role='banner'
    >
      {/* Image container with aspect ratio */}
      <div className='relative w-full h-[200px] sm:h-[250px] md:h-[300px] lg:h-[350px] xl:h-[400px]'>
        <figure className='m-0 p-0 h-full w-full'>
          <Image
            src={imagePath}
            alt={imageAlt}
            fill
            priority
            sizes='100vw'
            className='object-cover object-center'
            role='img'
          />
          <figcaption className='sr-only'>{imageAlt}</figcaption>
        </figure>

        {/* Dark overlay */}
        <div
          className={`absolute inset-0 flex flex-col justify-center px-4 md:px-8 ${getBlackOverlayClass(
            overlayOpacity
          )}`}
          aria-hidden='true'
        >
          <div
            className={`max-w-6xl mx-auto w-full flex flex-col ${getAlignmentClasses(
              align
            )}`}
          >
            <div
              className={`inline-block px-6 py-4 rounded-lg shadow-md ${getWhiteOverlayClass(
                textBgOpacity
              )}`}
            >
              <h1
                id={headingId}
                className='text-gray-900 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold'
              >
                {title}
              </h1>
              {subtitle && (
                <p
                  className='text-gray-700 text-sm sm:text-base md:text-lg lg:text-xl mt-2 md:mt-4 max-w-3xl'
                  aria-level={2}
                  role='heading'
                >
                  {subtitle}
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
