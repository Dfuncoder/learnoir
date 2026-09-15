import Reveal from '../../components/Reveal';
import Shelf from '../../components/Shelf';
import { SHELVES } from '../../lib/data';

export const metadata = {
  title: 'Lesson Library',
  description: 'Browse Learnoir\'s cinematic lesson library: Physics, Chemistry, Mathematics, Biology and more — every topic taught through anime, blockbuster and football interest tracks.',
};

export default function Library() {
  return (
    <>
      <Reveal />
      <div className="page-head">
        <div className="wrap">
          <p className="kicker rv">The library</p>
          <h1 className="rv rv-d1">Now showing on the syllabus.</h1>
          <p className="rv rv-d2">Every episode maps to one syllabus point. The full library is in production and coming soon — <a href="/waitlist" style={{ textDecoration: 'underline' }}>join the waitlist</a> to be first in.</p>
        </div>
      </div>
      <section className="sec" style={{ paddingTop: 20 }}>
        <div className="wrap">
          {SHELVES.map((s) => (
            <div key={s.heading}>
              <div className="row-label rv"><h3>{s.heading}</h3><span>drag to browse →</span></div>
              <Shelf items={s.items} />
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
