/**
 * Utility functions for mapping values to Tailwind CSS classes
 */

/**
 * Converts a numeric opacity value to a Tailwind black background opacity class
 * @param opacity - Opacity value between 0 and 1
 * @returns Tailwind CSS class for black background with appropriate opacity
 */
export function getBlackOverlayClass(opacity: number): string {
  if (opacity <= 0.1) return 'bg-black/10';
  if (opacity <= 0.2) return 'bg-black/20';
  if (opacity <= 0.3) return 'bg-black/30';
  if (opacity <= 0.4) return 'bg-black/40';
  if (opacity <= 0.5) return 'bg-black/50';
  if (opacity <= 0.6) return 'bg-black/60';
  if (opacity <= 0.7) return 'bg-black/70';
  if (opacity <= 0.8) return 'bg-black/80';
  if (opacity <= 0.9) return 'bg-black/90';
  return 'bg-black';
}

/**
 * Converts a numeric opacity value to a Tailwind white background opacity class
 * @param opacity - Opacity value between 0 and 1
 * @returns Tailwind CSS class for white background with appropriate opacity
 */
export function getWhiteOverlayClass(opacity: number): string {
  if (opacity <= 0.1) return 'bg-white/10';
  if (opacity <= 0.2) return 'bg-white/20';
  if (opacity <= 0.3) return 'bg-white/30';
  if (opacity <= 0.4) return 'bg-white/40';
  if (opacity <= 0.5) return 'bg-white/50';
  if (opacity <= 0.6) return 'bg-white/60';
  if (opacity <= 0.7) return 'bg-white/70';
  if (opacity <= 0.8) return 'bg-white/80';
  if (opacity <= 0.9) return 'bg-white/90';
  return 'bg-white';
}

/**
 * Returns alignment classes based on alignment preference
 * @param align - Alignment preference: 'left', 'center', or 'right'
 * @returns Tailwind CSS classes for text and item alignment
 */
export function getAlignmentClasses(
  align: 'left' | 'center' | 'right'
): string {
  switch (align) {
    case 'left':
      return 'text-left items-start';
    case 'right':
      return 'text-right items-end';
    default:
      return 'text-center items-center';
  }
}
