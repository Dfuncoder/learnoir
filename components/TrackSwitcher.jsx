'use client';
import { useState } from 'react';
import { TRACKS } from '../lib/data';

export default function TrackSwitcher() {
  const [key, setKey] = useState('anime');
  const [fading, setFading] = useState(false);
  const t = TRACKS[key];

  const pick = (k) => {
    if (k === key) return;
    setFading(true);
    setTimeout(() => { setKey(k); setFading(false); }, 300);
  };

  return (
    <>
      <div className="tabs rv" role="tablist" aria-label="Interest track">
        {Object.entries(TRACKS).map(([k, v]) => (
          <button key={k} role="tab" aria-selected={key === k} className={`tab ${key === k ? 'on' : ''}`} onClick={() => pick(k)}>
            {v.label}
          </button>
        ))}
      </div>
      <div className="stagefx">
        <div className={`poster rv ${fading ? 'fade' : ''}`}>
          <div className="poster-bg" style={{ background: t.bg }} />
          <div className="poster-grain" />
          <div className="poster-tag">{t.tag}</div>
          <div className="poster-ep">{t.ep}</div>
          <div className="poster-title">{t.title}</div>
        </div>
        <div className="sw-copy rv rv-d1">
          <h3>Newton's First Law — Inertia</h3>
          <p className={fading ? 'fade' : ''} dangerouslySetInnerHTML={{ __html: t.text }} />
          <div className="sw-note">
            <b>Same syllabus point. Same exam question.</b> Only the story changes — because the
            scene must carry the concept, not distract from it.
          </div>
        </div>
      </div>
    </>
  );
}
