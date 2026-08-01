interface PreloaderProps {
  pct: number;
  done: boolean;
}

export function Preloader({ pct, done }: PreloaderProps) {
  return (
    <div id="preloader" className={done ? 'done' : ''}>
      <div className="pl-mark">
        <span className="dot" />
        6ix Afterdark
      </div>
      <div className="pl-bar">
        <span style={{ width: `${pct}%` }} />
      </div>
      <div className="pl-pct mono">
        <span>{pct}</span>%
      </div>
    </div>
  );
}
