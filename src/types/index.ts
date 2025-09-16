// Common types for the application

export interface ScheduleDay {
  date: string; // e.g., "August 30th, 2025"
  dayOfWeek: string; // e.g., "Saturday"
  time: string; // e.g., "noon-5pm"
  notes?: string; // e.g., "Jerry is demoing tactile maps"
  isSpecial?: boolean; // e.g., "masked day"
}

export interface Event {
  id: string;
  title: string;
  date: string; // Overall date range for display
  location: string;
  time?: string; // Legacy field for simple events
  schedule?: ScheduleDay[]; // New structured schedule for multi-day events
  description: string;
  isPast: boolean;
  // Grant-related fields
  attendanceCount?: number;
  artistCount?: number;
  grantSupport?: string[]; // List of grants that supported this event
  altText?: string; // Alt text for event image
}

export interface Testimonial {
  id: string;
  question?: string;
  quote: string;
  name: string;
}

export interface Artist {
  id: string;
  name: string;
  bio: string;
  website?: string;
  artworks?: string[];
}

// Add more types as needed
