'use client';
import { useState } from 'react';
import { FAQS } from '../lib/data';

export default function Faq({ limit }) {
  const [open, setOpen] = useState(-1);
  const items = limit ? FAQS.slice(0, limit) : FAQS;
  return (
    <div className="faq rv">
      {items.map((f, i) => (
        <div key={i} className={`qa ${open === i ? 'open' : ''}`}>
          <button aria-expanded={open === i} onClick={() => setOpen(open === i ? -1 : i)}>{f.q}</button>
          <div className="a"><div>{f.a}</div></div>
        </div>
      ))}
    </div>
  );
}
