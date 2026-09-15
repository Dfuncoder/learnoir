'use client';
import { useState } from 'react';
import { TRACKS } from '../lib/data';

export default function TrackSwitcher() {
  const [key, setKey] = useState('anime');
  const [fading, setFading] = useState(false);
  const [broken, setBroken] = useState({});
  const t = TRACKS[key];

  const pick = (k) => {
    if (k === key) return;
    setFading(true);
    setTimeout(() => { setKey(k); setFading(false); }, 300);
  };

  // Falls back to the gradient poster if an image is missing.
  const hasImg = Boolean(t.img) && !broken[key];

  return (
    <>
      <div className="tabs rv" role="tablist" aria-label="Interest track">
        {Object.entries(TRACKS).map(([k, v]) => (
          <button key={k} role="tab" aria-selected={key === k} className={`tab ${key === k ? 'on' : ''}`} onClick={() => pick(k)}>
            {v.label}
          </button>
        ))}
      </div>
      <div className="stagefx rv">
        <div className={`poster ${fading ? 'fade' : ''}`}>
          <div className="poster-bg" style={{ background: t.bg }} />
          {hasImg && (
            <img
              className="poster-img"
              src={t.img}
              alt={`${t.tag} — ${t.title}`}
              onError={() => setBroken((b) => ({ ...b, [key]: true }))}
            />
          )}
          <div className={hasImg ? "poster-shade" : "poster-grain"} />
          {!hasImg && <div className="poster-tag">{t.tag}</div>}
          {!hasImg && <div className="poster-ep">{t.ep}</div>}
          {!hasImg && <div className="poster-title">{t.title}</div>}
          <div className="poster-playwrap" aria-hidden="true">
            <span className="poster-play">
              <svg viewBox="0 0 24 24" width="26" height="26"><path d="M9 6.2v11.6l9.4-5.8z" fill="currentColor" /></svg>
            </span>
          </div>
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
