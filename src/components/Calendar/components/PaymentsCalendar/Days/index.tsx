import clsx from 'clsx';
import { format, isToday } from 'date-fns';
import { motion } from 'framer-motion';

// Components
import { PaymentsCalendar } from '..';

// Context
import { useCalendarContext } from '../context';

export function Days({ children }: { children?: React.ReactNode }) {
  const { daysInMonth, startingDayIndex } = useCalendarContext();

  if (children) return <>{children}</>;

  return (
    <>
      {Array.from({ length: startingDayIndex }).map((_, index) => (
        <div key={`empty-${index}`}></div>
      ))}
      {daysInMonth.map((day, index) => (
        <PaymentsCalendar.TooltipTooltip key={index}>
          <motion.div
            className={clsx(
              'flex flex-col justify-evenly items-center bg-custom-gray rounded-xl w-16 h-16 mb-3',
              {
                'bg-red-800': isToday(day),
              },
            )}
            // initial={{ opacity: 0 }}
            // animate={{ opacity: 1 }}
            // transition={{ duration: 0.2 }}
          >
            {format(day, 'dd')}
          </motion.div>
        </PaymentsCalendar.TooltipTooltip>
      ))}
    </>
  );
}
