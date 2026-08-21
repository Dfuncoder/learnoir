import { SUBJECTS } from '../lib/data';

export default function Ticker() {
  const items = [...SUBJECTS, ...SUBJECTS];
  return (
    <div className="ticker" aria-hidden="true">
      <div className="ticker-track">
        {items.map((s, i) => (
          <span key={i}>{s} <i>✦</i></span>
        ))}
      </div>
    </div>
  );
}
