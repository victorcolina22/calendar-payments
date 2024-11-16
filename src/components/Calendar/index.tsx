import { eachDayOfInterval, endOfMonth, getDay, startOfMonth } from 'date-fns';

// Components
import { PaymentsCalendar } from './components/PaymentsCalendar';

// Services
import { PricingService } from '../../services/pricing';

// Constants
import { WEEKDAYS } from '../../constants';

const events = await PricingService.getAllStreamingServicesPricing();

export function Calendar() {
  const currentDate = new Date();
  const firstDayOfMonth = startOfMonth(currentDate);
  const lastDayOfMonth = endOfMonth(currentDate);

  const daysInMonth = eachDayOfInterval({
    start: firstDayOfMonth,
    end: lastDayOfMonth,
  });
  const startingDayIndex = getDay(firstDayOfMonth);

  const provider = {
    daysInMonth,
    startingDayIndex,
    weekDays: WEEKDAYS,
    events,
  };

  return (
    <PaymentsCalendar provider={{ ...provider }}>
      <PaymentsCalendar.WeekDays />
      <PaymentsCalendar.Days />
    </PaymentsCalendar>
  );
}
