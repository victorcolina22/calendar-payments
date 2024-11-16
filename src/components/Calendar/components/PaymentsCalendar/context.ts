import { createContext, useContext } from 'react';

interface ICalendarContext {
  daysInMonth: Date[];
  startingDayIndex: number;
  weekDays: string[];
  events: any;
}

export const CalendarContext = createContext<ICalendarContext | null>(null);

export const useCalendarContext = () => {
  const context = useContext(CalendarContext);
  if (!context)
    throw new Error(
      'useCalendarContext must be used within a CalendarProvider',
    );
  return context;
};
