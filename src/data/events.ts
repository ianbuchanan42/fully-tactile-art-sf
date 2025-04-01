import { Event } from '@/types';

// Local JSON data for events
// This can be replaced with Supabase fetching later
export const events: Event[] = [
  {
    id: 'staying-in-touch-2025',
    title: 'Staying in "Touch"',
    date: 'March 9th, 2025',
    location: 'Jettison Creative, 47 Jeff Adachi Way, San Francisco',
    time: '12:00–3:00 pm (Presentations begin at 1:00 pm)',
    description:
      'On March 9, 2024, Fully Tactile Art SF hosted "Staying in Touch" at Jettison Creative in San Francisco, an intimate exhibition that showcased the innovative work of five tactile artists—Tan Reese, Susan Dambroff, Carolyn CC Hart, Kit Rosefield, and Blink Pop Shift. The event, which ran from 12:00 to 3:00 pm with presentations beginning at 1:00 pm, featured engaging artist presentations and thoughtful discussions on the importance of accessibility in art. Attendees experienced a transformative, multi-sensory journey through diverse media, reinforcing the need for more accessible public art spaces and setting a promising precedent for future exhibitions.',
    isPast: true,
    attendanceCount: 80,
    artistCount: 5,
    grantSupport: [],
  },
  {
    id: 'fully-tactile-art-exhibition-2024',
    title: 'Fully Tactile Art Exhibition',
    date: 'July 24–28, 2024',
    location: 'Jettison Creative, 47 Jeff Adachi Way, San Francisco',
    description:
      'The Fully Tactile Art Exhibition 2024 was a groundbreaking, inclusive art experience held at Jettison Creative in SOMA over five days. Featuring work from 20+ artists and welcoming 400 visitors, the exhibition reimagined public art spaces by focusing on accessibility and multi-sensory engagement. Each piece was accompanied by Braille and many had audio descriptions, with docents guiding in-depth tours. Developed through collaboration among directors, artists, community members, and accessibility advocates, this transformative event demonstrated the vital need for more art exhibitions that center inclusivity and tactile interaction.',
    isPast: true,
    attendanceCount: 400,
    artistCount: 20,
    grantSupport: ['Zellerbach Community Arts Grant'],
  },
];

// Helper functions
export function getCurrentEvents(): Event[] {
  return events.filter((event) => !event.isPast);
}

export function getPastEvents(): Event[] {
  return events.filter((event) => event.isPast);
}

// Get the next upcoming event
export function getNextEvent(): Event | undefined {
  return events.find((event) => !event.isPast);
}
