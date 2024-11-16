// Components
import { Days } from './Days';
import { Tooltip } from './Tooltip';
import { WeekDays } from './WeekDays';

// Context
import { CalendarContext } from './context';

interface Props {
  children: React.ReactNode;
  provider?: any;
}
export function PaymentsCalendar({ children, provider }: Props) {
  return (
    <CalendarContext.Provider value={{ ...provider }}>
      <div className='grid grid-cols-7 place-items-center'>{children}</div>
    </CalendarContext.Provider>
  );
}

PaymentsCalendar.WeekDays = WeekDays;
PaymentsCalendar.Days = Days;
PaymentsCalendar.TooltipTooltip = Tooltip;
