import { Fragment } from 'react';

interface TickerProps {
  items: readonly string[];
  reverse?: boolean;
  alt?: boolean;
}

function TickerContent({ items }: { items: readonly string[] }) {
  return (
    <span>
      {items.map((item) => (
        <Fragment key={item}>
          {item} <b>&bull;</b>{' '}
        </Fragment>
      ))}
    </span>
  );
}

export function Ticker({ items, reverse = false, alt = false }: TickerProps) {
  return (
    <div className={`ticker-band${alt ? ' ticker-alt' : ''}`}>
      <div className={`ticker-track${reverse ? ' ticker-track-rev' : ''}`}>
        <TickerContent items={items} />
        <TickerContent items={items} />
      </div>
    </div>
  );
}
