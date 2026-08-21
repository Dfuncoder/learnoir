import Reveal from '../../components/Reveal';
import Faq from '../../components/Faq';
import { FAQS } from '../../lib/data';

export const metadata = {
  title: 'FAQ',
  description: 'Frequently asked questions about Learningale: curriculum alignment, pricing vs private tutoring, interest tracks, devices and availability.',
};

export default function FaqPage() {
  const ld = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: FAQS.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };
  return (
    <>
      <Reveal />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }} />
      <div className="page-head">
        <div className="wrap">
          <p className="kicker rv">FAQ</p>
          <h1 className="rv rv-d1">Straight answers.</h1>
        </div>
      </div>
      <section className="sec" style={{ paddingTop: 30 }}>
        <div className="wrap"><Faq /></div>
      </section>
    </>
  );
}
