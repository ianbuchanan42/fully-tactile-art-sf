import { ScheduleDay } from '@/types';

interface EventScheduleProps {
  schedule: ScheduleDay[];
  className?: string;
}

export default function EventSchedule({
  schedule,
  className = '',
}: EventScheduleProps) {
  return (
    <div className={`space-y-2 ${className}`}>
      <h3 className='font-semibold text-base'>Schedule:</h3>
      <div className='space-y-1'>
        {schedule.map((day, index) => (
          <div
            key={index}
            className={`p-2 rounded border ${
              day.isSpecial
                ? 'bg-yellow-50 border-yellow-200'
                : 'bg-gray-50 border-gray-200'
            }`}
          >
            <div className='flex items-center justify-between gap-2'>
              <div className='flex-1'>
                <div className='font-medium text-sm'>
                  {day.dayOfWeek}, {day.date} - {day.time}
                </div>
                {day.notes && (
                  <div className='text-sm text-gray-700 mt-0.5 italic'>
                    {day.notes}
                  </div>
                )}
              </div>
              {day.isSpecial && (
                <span className='inline-flex items-center px-1.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800 border border-yellow-300 shadow-sm'>
                  <svg
                    className='w-3 h-3 mr-1'
                    fill='currentColor'
                    viewBox='0 0 20 20'
                    aria-hidden='true'
                  >
                    <path
                      fillRule='evenodd'
                      d='M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z'
                      clipRule='evenodd'
                    />
                  </svg>
                  Special Event
                </span>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
