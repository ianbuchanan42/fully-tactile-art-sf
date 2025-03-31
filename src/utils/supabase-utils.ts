import { Event } from '@/types';
import { events } from '@/data/events';

// This file will contain utility functions for Supabase integration
// Currently using local data, but can be updated to use Supabase when ready

/**
 * Gets events from the data source (currently local, will be Supabase in the future)
 * @returns Promise<Event[]> List of all events
 */
export async function getEvents(): Promise<Event[]> {
  // TODO: Replace with Supabase query when ready
  // Example Supabase implementation would be:
  // const { data, error } = await supabase
  //   .from('events')
  //   .select('*')
  //   .order('date', { ascending: true });

  // if (error) {
  //   console.error('Error fetching events:', error);
  //   return [];
  // }

  // return data as Event[];

  // For now, just return local data
  return events;
}

/**
 * Gets events that are not past (upcoming events)
 * @returns Promise<Event[]> List of upcoming events
 */
export async function getUpcomingEvents(): Promise<Event[]> {
  // TODO: Replace with Supabase query when ready
  // Example:
  // const { data, error } = await supabase
  //   .from('events')
  //   .select('*')
  //   .eq('isPast', false)
  //   .order('date', { ascending: true });

  const allEvents = await getEvents();
  return allEvents.filter((event) => !event.isPast);
}

/**
 * Gets events that are in the past
 * @returns Promise<Event[]> List of past events
 */
export async function getPastEvents(): Promise<Event[]> {
  // TODO: Replace with Supabase query when ready
  const allEvents = await getEvents();
  return allEvents.filter((event) => event.isPast);
}

/**
 * Get a single event by ID
 * @param id Event ID
 * @returns Promise<Event | null> The event or null if not found
 */
export async function getEventById(id: string): Promise<Event | null> {
  // TODO: Replace with Supabase query when ready
  const allEvents = await getEvents();
  return allEvents.find((event) => event.id === id) || null;
}

// Add more Supabase utility functions as needed for other data types and operations
