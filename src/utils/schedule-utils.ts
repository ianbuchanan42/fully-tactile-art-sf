import { ScheduleDay } from '@/types';

/**
 * Formats a schedule day for display
 */
export function formatScheduleDay(day: ScheduleDay): string {
  let formatted = `${day.dayOfWeek}, ${day.date} - ${day.time}`;
  if (day.notes) {
    formatted += ` (${day.notes})`;
  }
  if (day.isSpecial) {
    formatted += ' [Special Event]';
  }
  return formatted;
}

/**
 * Gets a summary of the schedule (e.g., "6 days, Aug 30 - Sep 7")
 */
export function getScheduleSummary(schedule: ScheduleDay[]): string {
  if (schedule.length === 0) return '';

  const firstDay = schedule[0];
  const lastDay = schedule[schedule.length - 1];

  if (schedule.length === 1) {
    return `${firstDay.dayOfWeek}, ${firstDay.date}`;
  }

  return `${schedule.length} days, ${firstDay.date} - ${lastDay.date}`;
}

/**
 * Groups schedule days by week for better organization
 */
export function groupScheduleByWeek(schedule: ScheduleDay[]): ScheduleDay[][] {
  const weeks: ScheduleDay[][] = [];
  let currentWeek: ScheduleDay[] = [];

  schedule.forEach((day, index) => {
    if (index > 0) {
      const prevDay = schedule[index - 1];
      const daysDiff = getDaysDifference(prevDay.date, day.date);

      // Start new week if gap is more than 2 days
      if (daysDiff > 2) {
        if (currentWeek.length > 0) {
          weeks.push(currentWeek);
          currentWeek = [];
        }
      }
    }

    currentWeek.push(day);
  });

  if (currentWeek.length > 0) {
    weeks.push(currentWeek);
  }

  return weeks;
}

/**
 * Helper function to calculate days difference between dates
 * This is a simplified version - in production you'd use a proper date library
 */
function getDaysDifference(date1: string, date2: string): number {
  try {
    // Parse dates like "August 30th, 2025" to Date objects
    const parseDate = (dateStr: string): Date => {
      // Remove ordinal indicators (th, st, nd, rd) and parse
      const cleanDate = dateStr.replace(/(\d+)(st|nd|rd|th)/, '$1');
      return new Date(cleanDate);
    };

    const d1 = parseDate(date1);
    const d2 = parseDate(date2);

    const diffTime = Math.abs(d2.getTime() - d1.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    return diffDays;
  } catch {
    // Fallback to 1 if parsing fails
    return 1;
  }
}
