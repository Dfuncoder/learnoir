import Reveal from '../../components/Reveal';
import ContactForm from '../../components/ContactForm';

export const metadata = {
  title: 'Contact',
  description: 'Contact the Learnoir team — partnerships, schools, press and support.',
};

export default function Contact() {
  return (
    <>
      <Reveal />
      <div className="page-head">
        <div className="wrap">
          <p className="kicker rv">Contact</p>
          <h1 className="rv rv-d1">Talk to us.</h1>
          <p className="rv rv-d2">Parents, schools, partners, press — we answer everything.</p>
        </div>
      </div>
      <section className="sec" style={{ paddingTop: 30 }}>
        <div className="wrap contact-grid">
          <ContactForm />
          <div>
            <div className="contact-card rv rv-d1" style={{ marginBottom: 20 }}>
              <h3>Email</h3>
              <p>For anything at all — we read every message.</p>
              <a className="btn btn-line" href="mailto:hello@learnoir.com">hello@learnoir.com</a>
            </div>
            <div className="contact-card rv rv-d2">
              <h3>Schools &amp; partnerships</h3>
              <p>Bringing Learnoir to a whole school or organisation? Let's design it together.</p>
              <a className="btn btn-line" href="mailto:partners@learnoir.com">partners@learnoir.com</a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
