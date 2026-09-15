import Reveal from '../../components/Reveal';
import PricingPanel from '../../components/PricingPanel';
import Faq from '../../components/Faq';

export const metadata = {
  title: 'Pricing',
  description: 'Learnoir pricing: full curriculum access for ₦3,000/month or ₦25,000/year. A full year costs less than two months of private tutoring.',
};

export default function Pricing() {
  return (
    <>
      <Reveal />
      <div className="page-head">
        <div className="wrap">
          <p className="kicker rv">Pricing</p>
          <h1 className="rv rv-d1">Two plans. Nothing hidden.</h1>
          <p className="rv rv-d2">Full access to every subject, every topic and every live interest track — on every plan.</p>
        </div>
      </div>
      <section className="sec pricing-sec" style={{ paddingTop: 30 }}>
        <div className="wrap">
          <PricingPanel />
        </div>
      </section>
      <section className="sec" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="sec-head center rv">
            <p className="kicker">Before you decide</p>
            <h2>Questions parents ask.</h2>
          </div>
          <Faq limit={4} />
        </div>
      </section>
    </>
  );
}
