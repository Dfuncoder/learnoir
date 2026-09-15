import Reveal from '../../components/Reveal';

export const metadata = {
  title: 'About',
  description: 'Why Learnoir exists: children have not lost the ability to focus — education stopped competing for their attention. We are here to give curiosity back its pull.',
};

export default function About() {
  return (
    <>
      <Reveal />
      <div className="page-head">
        <div className="wrap">
          <p className="kicker rv">About Learnoir</p>
          <h1 className="rv rv-d1">Curiosity built everything.<br />We're giving it back its pull.</h1>
        </div>
      </div>
      <section className="sec" style={{ paddingTop: 30 }}>
        <div className="wrap prose">
          <p className="rv">
            Every generation of human progress came from people who found questions
            irresistible — who studied the stars, the body, the number line, not because an
            exam demanded it, but because they <b>could not look away</b>.
          </p>
          <p className="rv">
            Today's students can't look away either. But what holds them is a feed engineered
            by the world's best attention scientists — while their education still arrives as
            it did decades ago. The result shows up on every exam scoreboard: not a
            generation that can't learn, but a generation whose learning materials never
            entered the competition for their attention.
          </p>
          <h2 className="rv">What we build</h2>
          <p className="rv">
            Learnoir delivers the school curriculum as cinematic, bingeable episodes,
            matched to each child's own interests. The anime fan learns inertia from a
            swordsman who will not be moved. The football fan learns it from a dead ball on
            the penalty spot. <b>Same syllabus point, same exam question — a story that
            finally belongs to the student watching it.</b>
          </p>
          <h2 className="rv">Where we're going</h2>
          <p className="rv">
            We're launching with the Nigerian curriculum — a market we know from the inside —
            and expanding country by country, curriculum by curriculum. The destination is
            simple to say and enormous to build: a world where no child experiences the
            syllabus as something done to them, and every child gets to feel the pull that
            built everything humans have ever made.
          </p>
        </div>
      </section>
    </>
  );
}
