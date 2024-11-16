// Context
import { useCalendarContext } from '../context';

// Utils
import { formatNumber } from '../../../../../utils/formatNumbers';

export function Tooltip({ children }: { children: React.ReactNode }) {
  const { events } = useCalendarContext();
  const data = events ? events[0] : undefined;

  return (
    <article className='group relative'>
      <div className='bg-custom-transparent-black hidden group-hover:block absolute -top-[108px] left-1/2 -translate-x-1/2 hover:flex flex-col items-center space-y-1 justify-center border border-red-500 rounded-xl z-50 min-w-[300px] px-5 py-3'>
        <header className='flex items-center justify-between'>
          <p>{data?.name ?? ''}</p>
          <p>{`$${formatNumber(data?.price) ?? ''}`}</p>
        </header>
        <section className='flex items-center justify-between text-[12px]'>
          <p>Every 24th</p>
          <p>Next Payment</p>
        </section>
        <footer className='flex items-center justify-between'>
          <p>Total since 2022-11-01</p>
          <p>$107.88</p>
        </footer>
      </div>
      {children}
    </article>
  );
}
