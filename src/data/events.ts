import { Event } from '@/types';

// Local JSON data for events
// This can be replaced with Supabase fetching later
export const events: Event[] = [
  {
    id: 'exploring-maps-2025',
    title: 'Exploring Maps',
    date: 'August 30th - September 7th, 2025',
    location: 'Jettison Creative, 47 Jeff Adachi Way, San Francisco',
    schedule: [
      {
        date: 'August 30th, 2025',
        dayOfWeek: 'Saturday',
        time: 'Noon-5pm',
      },
      {
        date: 'August 31st, 2025',
        dayOfWeek: 'Sunday',
        time: 'Noon-5pm',
        notes:
          '*Jerry Kuns and Joshua Miele will be presenting mini lectures on maps at 3pm',
        isSpecial: true,
      },
      {
        date: 'September 1st, 2025',
        dayOfWeek: 'Monday',
        time: 'Noon-5pm',
      },
      {
        date: 'September 5th, 2025',
        dayOfWeek: 'Friday',
        time: '3-8pm',
        isSpecial: true,
        notes: '*Showing Film: Telephone at 7pm',
      },
      {
        date: 'September 6th, 2025',
        dayOfWeek: 'Saturday',
        time: 'Noon-5pm',
      },
      {
        date: 'September 7th, 2025',
        dayOfWeek: 'Sunday',
        time: 'Noon-5pm',
        notes: '*Masks will be required for this day.',
        isSpecial: true,
      },
    ],
    description:
      'Fully Tactile Art SF presented Exploring Maps, a multi-day exhibition at Jettison Creative in San Francisco that invited the public to engage with maps not only as guides of space but as vessels of memory, imagination, and emotion. Held over two weekends from August 30 to September 7, the free event showcased tactile artworks that explored connection, texture, and possibility—blurring the line between function and fantasy—while offering visitors opportunities to experience space through touch and to attend a special presentation on tactile maps by Jerry Kuns & Joshua Miele.',
    isPast: true,
    attendanceCount: 170,
    artistCount: 7,
    grantSupport: [],
    altText:
      'A collage of map inspired artwork by Miriam Sweeney and Blink Pop Shift',
  },
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
    altText:
      'Artists and visitors interacting with tactile art at the "Staying in Touch" exhibition at Jettison Creative. Artists include Tan Reese, Blink Pop Shift and Kit Rosefield',
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
    altText:
      "Jerry hugs a hanging felt pod made by Stephanie Metz and another patron wearing a white glove explores work by Sade' Cole. You can see ceramics done by Tan Reese and a hanging flag promoting the event",
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
