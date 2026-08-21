'use client';
import { useEffect, useRef } from 'react';

function Count({ end, dec = 0, suffix = '' }) {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    const io = new IntersectionObserver((es) => {
      if (!es[0].isIntersecting) return;
      io.disconnect();
      const t0 = performance.now(), dur = 1400;
      const tick = (t) => {
        const p = Math.min((t - t0) / dur, 1);
        const v = end * (1 - Math.pow(1 - p, 3));
        el.textContent = v.toFixed(dec) + suffix;
        if (p < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    }, { threshold: 0.6 });
    io.observe(el);
    return () => io.disconnect();
  }, [end, dec, suffix]);
  return <span ref={ref}>0</span>;
}

export default function Stats() {
  return (
    <div className="stats">
      <article className="stat rv">
        <div className="n"><Count end={62.96} dec={2} /><small>%</small></div>
        <div className="l">WASSCE credit pass rate in our launch market, 2025 — down from 81.7% in 2021</div>
        <svg className="spark" viewBox="0 0 200 38" aria-hidden="true">
          <polyline points="6,6 54,13 102,9 150,19 194,32" />
          <circle cx="194" cy="32" r="3.5" />
        </svg>
        <div className="src">Source: WAEC official results, Nigeria, 2021–2025</div>
      </article>
      <article className="stat rv rv-d1">
        <div className="n"><Count end={4} /><small>+ hrs/day</small></div>
        <div className="l">Time teenagers report on social platforms — content built to be impossible to put down</div>
        <div className="src">Self-reported screen time, secondary students</div>
      </article>
      <article className="stat rv rv-d2">
        <div className="n"><Count end={10} /><small>×+</small></div>
        <div className="l">What a year of private tutoring costs versus a year of Learningale — for fewer subjects, at fixed hours</div>
        <div className="src">₦240,000/yr typical home-tutor spend in our launch market</div>
      </article>
    </div>
  );
}
