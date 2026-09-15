'use client';
import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { CURRENCIES, detectCurrencyCode, priceStrings } from '../lib/currency';

export default function PricingPanel() {
  const [cur, setCur] = useState('NGN');
  const manual = useRef(false);

  useEffect(() => {
    let alive = true;
    detectCurrencyCode().then((code) => {
      if (alive && code && !manual.current) setCur(code);
    });
    return () => { alive = false; };
  }, []);

  const pick = (code) => {
    manual.current = true;
    setCur(code);
  };

  const p = priceStrings(cur);
  return (
    <>
      <div className="cur-toggle rv" role="tablist" aria-label="Currency">
        {Object.entries(CURRENCIES).map(([code, c]) => (
          <button key={code} role="tab" aria-selected={cur === code} className={cur === code ? 'on' : ''} onClick={() => pick(code)}>
            {c.label}
          </button>
        ))}
      </div>
      <div className="plans">
        <div className="plan rv">
          <h3>Monthly</h3>
          <div className="amt">{p.symbol}{p.monthly}<small>/month</small></div>
          <div className="sub">Flexible — perfect around exam season</div>
          <ul>
            <li>Full curriculum access</li>
            <li>All live interest tracks</li>
            <li>Weekly parent reports</li>
            <li>Cancel any time, progress saved</li>
          </ul>
          <Link className="btn btn-line" href="/waitlist">Join the waitlist</Link>
        </div>
        <div className="plan hot rv rv-d1">
          <span className="badge">SAVE {p.save} · {p.permo}</span>
          <h3>Yearly</h3>
          <div className="amt">{p.symbol}{p.yearly}<small>/year</small></div>
          <div className="sub">One payment. A whole academic year covered.</div>
          <ul>
            <li>Everything in monthly</li>
            <li>New tracks included as they launch</li>
            <li>Exam-season priority content</li>
            <li>Costs less than 2 months of private tutoring</li>
          </ul>
          <Link className="btn btn-gold" href="/waitlist">Join the waitlist</Link>
        </div>
      </div>
    </>
  );
}
