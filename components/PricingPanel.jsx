'use client';
import { useState } from 'react';
import { PRICING } from '../lib/data';

export default function PricingPanel() {
  const [cur, setCur] = useState('USD');
  const p = PRICING[cur];
  return (
    <>
      <div className="cur-toggle rv" role="tablist" aria-label="Currency">
        {Object.keys(PRICING).map((c) => (
          <button key={c} role="tab" aria-selected={cur === c} className={cur === c ? 'on' : ''} onClick={() => setCur(c)}>
            {c === 'NGN' ? '₦ NGN' : '$ USD'}
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
          <button className="btn btn-line">Choose monthly</button>
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
          <button className="btn btn-gold">Choose yearly</button>
        </div>
      </div>
      <p className="plans-note">
        Billed in your local currency where supported. Prices shown for our launch markets.
      </p>
    </>
  );
}
