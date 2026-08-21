import Link from 'next/link';
import Reveal from '../components/Reveal';
import Ticker from '../components/Ticker';
import Stats from '../components/Stats';
import TrackSwitcher from '../components/TrackSwitcher';
import Shelf from '../components/Shelf';
import PricingPanel from '../components/PricingPanel';
import { SHELVES } from '../lib/data';

export default function Home() {
  return (
    <>
      <Reveal />
      <header className="hero" id="top">
        <div className="hero-bg" role="img"
          aria-label="Wall of Learningale lesson posters: anime surface tension, gravity, Newton's laws as a racing film, electrolysis in a cinematic lab" />
        <div className="hero-shade" />
        <div className="hero-in">
          <p className="eyebrow rv">The school curriculum, streaming</p>
          <h1 className="rv rv-d1">School, but they <em>can't stop watching.</em></h1>
          <p className="lede rv rv-d2">
            Every topic on the syllabus, produced like the shows your child already binges —
            anime arcs, blockbuster scenes, match-day energy. Same curriculum. Entirely different pull.
          </p>
          <div className="hero-ctas rv rv-d3">
            <Link className="btn btn-gold btn-big" href="/#tracks">See how it works</Link>
            <Link className="btn btn-line btn-big" href="/pricing">View pricing</Link>
          </div>
          <div className="hero-meta rv rv-d3">
            <span><b>Grades 7 – 12</b> · full syllabus</span>
            <span><b>Curriculum-aligned</b> lessons</span>
            <span>Works on <b>any phone</b></span>
          </div>
        </div>
      </header>

      <Ticker />

      <section className="sec" id="problem">
        <div className="wrap">
          <div className="sec-head rv">
            <p className="kicker">The problem</p>
            <h2>Our kids didn't stop paying attention. Attention got taken.</h2>
            <p>The average lesson competes with content engineered by the world's best attention scientists. It's not a fair fight — yet.</p>
          </div>
          <Stats />
          <p className="problem-copy rv">
            Exam scoreboards are falling and the usual response is more of the same lesson,
            delivered harder. Learningale starts from a different premise:{' '}
            <b>a child who watches four hours of anime a day has no attention problem.</b>{' '}
            The material was simply never made for them. So we make it for them.
          </p>
        </div>
      </section>

      <section className="sec switch-sec" id="tracks">
        <div className="wrap">
          <div className="sec-head rv">
            <p className="kicker">Interest tracks</p>
            <h2>One topic. Told their way.</h2>
            <p>At registration, your child picks what they love. The entire syllabus is then delivered through that world. Watch the same topic transform:</p>
          </div>
          <TrackSwitcher />
        </div>
      </section>

      <section className="sec" id="how">
        <div className="wrap">
          <div className="sec-head rv">
            <p className="kicker">How it works</p>
            <h2>Three steps to a child who studies without being chased.</h2>
          </div>
          <div className="steps">
            <article className="step rv">
              <h3>Pick their world</h3>
              <p>Your child registers and chooses their interests — anime, blockbuster cinema, football, with more tracks unlocking regularly.</p>
            </article>
            <article className="step rv rv-d1">
              <h3>Watch the syllabus as episodes</h3>
              <p>Every topic arrives as a short, cinematic episode inside their chosen world — bingeable on any phone, in order, with nothing skipped.</p>
            </article>
            <article className="step rv rv-d2">
              <h3>See the progress, weekly</h3>
              <p>Parents get a plain-language weekly report: topics covered, quiz scores, what's next. You see the value every week — not just on results day.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="sec" id="library-preview" style={{ paddingTop: 40 }}>
        <div className="wrap">
          <div className="sec-head rv">
            <p className="kicker">The library</p>
            <h2>Now showing on the syllabus.</h2>
            <p>A preview of the catalogue. New tracks and subjects unlock as we scale production.</p>
          </div>
          {SHELVES.map((s) => (
            <div key={s.heading}>
              <div className="row-label rv"><h3>{s.heading}</h3><span>drag to browse →</span></div>
              <Shelf items={s.items} />
            </div>
          ))}
          <p style={{ marginTop: 10 }} className="rv">
            <Link href="/library" className="btn btn-line">Browse the full library</Link>
          </p>
        </div>
      </section>

      <section className="sec" id="value">
        <div className="wrap">
          <div className="sec-head rv">
            <p className="kicker">The mathematics of it</p>
            <h2>What families already pay — and what they get.</h2>
          </div>
          <div className="compare">
            <div className="cmp bad rv">
              <h3>Private tutoring</h3>
              <div className="price">10×+ <small style={{ fontSize: '1rem', color: 'var(--muted)' }}>the cost</small></div>
              <div className="per">₦240,000/yr in our launch market — for one or two subjects</div>
              <ul>
                <li>One or two subjects only</li>
                <li>Fixed hours — miss it, lose it</li>
                <li>One teaching style, matched to no one</li>
                <li>No replay, no records, no reports</li>
              </ul>
            </div>
            <div className="cmp good rv rv-d1">
              <h3>Learningale</h3>
              <div className="price">$40<small style={{ fontSize: '1rem', color: 'var(--muted)' }}>/yr</small></div>
              <div className="per">every subject, every topic, all year (₦25,000 in Nigeria)</div>
              <ul>
                <li>Full curriculum, Grades 7 – 12</li>
                <li>Any hour, any phone, unlimited replay</li>
                <li>Matched to your child's own interests</li>
                <li>Weekly progress reports to your phone</li>
              </ul>
            </div>
          </div>
          <p className="punch rv">A full year of Learningale costs <b>less than two months</b> of private tutoring.</p>
        </div>
      </section>

      <section className="sec pricing-sec" id="pricing">
        <div className="wrap">
          <div className="sec-head center rv">
            <p className="kicker">Pricing</p>
            <h2>Two plans. Nothing hidden.</h2>
          </div>
          <PricingPanel />
        </div>
      </section>

      <section className="final">
        <div className="wrap">
          <h2 className="rv">The feed already has their attention.<br />Put the syllabus inside it.</h2>
          <p className="rv rv-d1">Join the first cohort of families turning screen time into the strongest study habit their child has ever had.</p>
          <Link className="btn btn-gold btn-big rv rv-d2" href="/pricing">Start watching</Link>
        </div>
      </section>
    </>
  );
}
