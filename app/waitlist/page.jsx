import Reveal from '../../components/Reveal';
import WaitlistForm from '../../components/WaitlistForm';

export const metadata = {
  title: 'Join the Waitlist',
  description:
    'Learnoir is opening to its first cohort soon. Join the waitlist and be first in when the full cinematic curriculum library goes live.',
};

export default function Waitlist() {
  return (
    <>
      <Reveal />
      <div className="page-head">
        <div className="wrap">
          <p className="kicker rv">The first cohort</p>
          <h1 className="rv rv-d1">Be first through the doors.</h1>
          <p className="rv rv-d2">
            The library is in production and the first cohort opens soon. Waitlist members
            get first access, founding-member pricing, and a say in which tracks we build next.
          </p>
        </div>
      </div>
      <section className="sec" style={{ paddingTop: 30 }}>
        <div className="wrap contact-grid">
          <WaitlistForm />
          <div>
            <div className="contact-card rv rv-d1" style={{ marginBottom: 20 }}>
              <h3>What you get</h3>
              <p>
                Early access before public launch · locked-in founding price of
                ₦3,000/month or ₦25,000/year · a vote on the next interest tracks.
              </p>
            </div>
            <div className="contact-card rv rv-d2">
              <h3>Questions first?</h3>
              <p>We read every message and answer everything.</p>
              <a className="btn btn-line" href="mailto:hello@learnoir.com">hello@learnoir.com</a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
