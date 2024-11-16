import { useCalendarContext } from '../context';

export function WeekDays({ children }: { children?: React.ReactNode }) {
  const { weekDays } = useCalendarContext();

  if (children) return <>{children}</>;

  return weekDays.map((weekday, index) => (
    <span
      key={`weekday-${index}`}
      className='px-5 rounded-xl bg-custom-gray text-center mb-5'
    >
      {weekday.toUpperCase()}
    </span>
  ));
}
