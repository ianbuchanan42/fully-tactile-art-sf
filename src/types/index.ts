// Common types for the application

export interface Event {
  id: string;
  title: string;
  date: string;
  location: string;
  time?: string;
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
