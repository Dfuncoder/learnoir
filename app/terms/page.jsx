import Reveal from '../../components/Reveal';

export const metadata = {
  title: 'Terms of Service',
  description:
    'The terms that govern your use of Learnoir — accounts, subscriptions, billing, acceptable use, intellectual property and liability.',
};

export default function Terms() {
  return (
    <>
      <Reveal />
      <div className="page-head">
        <div className="wrap">
          <p className="kicker rv">Legal</p>
          <h1 className="rv rv-d1">Terms of service</h1>
          <p className="rv rv-d2">The agreement between you and Learnoir. Please read it before subscribing.</p>
        </div>
      </div>
      <section className="sec" style={{ paddingTop: 20 }}>
        <div className="wrap prose">
          <p className="legal-date">Last updated: 14 September 2026</p>

          <p>
            These terms govern your use of the Learnoir website, waitlist and service. By joining our
            waitlist, creating an account or subscribing, you agree to them. If you do not agree, please
            do not use the service.
          </p>

          <h2>1. Learners and account holders</h2>
          <p>
            <b>There is no minimum age to learn on Learnoir.</b> The service is built for school-age
            students in Grades 7 to 12, and they are exactly who we expect to be watching.
          </p>
          <p>
            The age requirement applies only to the <b>account</b>: it must be opened by a parent,
            guardian, teacher or other responsible adult aged 18 or over, who accepts these terms and
            pays for the subscription. Learners then watch under that account, on their own profile.
            We ask for this because a subscription is a binding contract and a payment authorisation —
            neither of which a minor can lawfully enter — and because data protection law requires a
            parent or guardian to consent before we handle a child&rsquo;s information.
          </p>
          <p>
            The adult who opens the account is responsible for the learner profiles on it, for
            supervising use, and for activity that takes place under it.
          </p>
          <p>
            If you are opening an account on behalf of a school or organisation, you confirm you are
            authorised to accept these terms for that organisation.
          </p>

          <h2>2. The waitlist and pre-launch status</h2>
          <p>
            Learnoir is currently in production and opening to a first cohort. Joining the waitlist does
            not create a subscription, does not guarantee a place, and does not oblige you to pay
            anything. We will contact you at the email address you give us when places open. You may ask
            to be removed from the waitlist at any time by emailing us.
          </p>
          <p>
            Lesson titles, interest tracks, release dates and catalogue contents shown on this site are
            indicative of what we are producing and may change before launch.
          </p>

          <h2>3. Subscriptions and payment</h2>
          <p>
            Learnoir is sold as a monthly or yearly subscription. Our launch prices are{' '}
            <b>₦3,000 per month</b> or <b>₦25,000 per year</b>, with equivalent prices in other supported
            currencies. Prices are shown before you confirm any purchase, and the price displayed at
            checkout is the price you pay.
          </p>
          <ul>
            <li>Monthly plans renew automatically each month until you cancel.</li>
            <li>Yearly plans cover twelve months from the date of purchase.</li>
            <li>Payments are taken by third-party payment providers; we do not store your card details.</li>
            <li>You can cancel at any time from your account or by emailing us. Cancellation stops future renewals and takes effect at the end of the period you have already paid for.</li>
            <li>Access continues until the end of the paid period. We do not provide partial refunds for time already elapsed, except where required by law.</li>
          </ul>
          <p>
            We may change our prices. If we do, we will give you at least 30 days&rsquo; notice by email
            before the change applies to your renewal, and you may cancel before it takes effect. Any
            founding-member price we confirm to you in writing will be honoured for as long as your
            subscription remains active and uninterrupted.
          </p>
          <p>
            If a payment fails, we may suspend access until payment succeeds. Your learning progress is
            kept and restored when the subscription resumes.
          </p>

          <h2>4. Your licence to use the content</h2>
          <p>
            Subject to these terms and your payment, we grant you a personal, limited, non-exclusive,
            non-transferable and revocable licence to stream Learnoir lessons for private, non-commercial
            educational use within a single household.
          </p>
          <p>You may not:</p>
          <ul>
            <li>Download, record, copy, or redistribute lessons, except where the service offers a download feature</li>
            <li>Share account credentials outside your household, or resell access</li>
            <li>Screen Learnoir content publicly, in a classroom, or in any commercial setting without a school or organisation licence from us</li>
            <li>Remove watermarks or circumvent any technical protection</li>
            <li>Use our content to train machine-learning models or to build a competing service</li>
          </ul>
          <p>
            Schools and organisations wanting multi-learner access should contact{' '}
            <a href="mailto:partners@learnoir.com">partners@learnoir.com</a> for a licence that fits.
          </p>

          <h2>5. Intellectual property</h2>
          <p>
            All Learnoir lessons, scripts, artwork, animation, audio, characters, branding, logos and
            software remain the property of Learnoir or its licensors, and are protected by copyright and
            other intellectual property laws. Nothing in these terms transfers ownership to you.
          </p>

          <h2>6. Acceptable use</h2>
          <p>You agree not to:</p>
          <ul>
            <li>Use the service unlawfully, or to harass, harm or impersonate anyone</li>
            <li>Attempt to gain unauthorised access to our systems, other accounts, or any data you are not entitled to</li>
            <li>Interfere with, overload, scrape or reverse-engineer the service</li>
            <li>Upload anything malicious, or anything you do not have the right to share</li>
          </ul>
          <p>
            We may suspend or close an account that breaches these terms, and will tell you why where we
            are permitted to.
          </p>

          <h2>7. What you send us</h2>
          <p>
            If you send us feedback, questions or suggestions, you allow us to use them to improve the
            service without obligation or payment to you. You keep ownership of anything you send; we just
            need permission to act on it.
          </p>

          <h2>8. Availability and changes to the service</h2>
          <p>
            We work to keep Learnoir available and reliable, but we cannot promise uninterrupted service.
            Access may be interrupted for maintenance, updates, or circumstances beyond our control,
            including network and power outages. We may add, change or withdraw features, tracks or
            lessons as the catalogue develops, provided we do not materially reduce what you have paid for
            during a period you have already paid.
          </p>

          <h2>9. Educational disclaimer</h2>
          <p>
            Learnoir is a supplementary learning resource aligned to school curricula. It is not a school,
            not a substitute for formal education, and not an examination body. We do not guarantee any
            particular grade, examination result or academic outcome. Learning outcomes depend on many
            factors outside our control.
          </p>

          <h2>10. Limitation of liability</h2>
          <p>
            To the fullest extent permitted by law, Learnoir is provided on an &ldquo;as is&rdquo; and
            &ldquo;as available&rdquo; basis, and we exclude implied warranties. We are not liable for
            indirect, incidental or consequential loss, loss of profits, loss of data, or examination
            outcomes. Our total liability to you in any twelve-month period is limited to the amount you
            paid us in that period.
          </p>
          <p>
            Nothing in these terms limits liability that cannot lawfully be limited, including liability
            for death or personal injury caused by negligence, or for fraud.
          </p>

          <h2>11. Ending the agreement</h2>
          <p>
            You may stop using Learnoir and cancel your subscription at any time. We may suspend or
            terminate your access if you materially breach these terms, if payment fails and is not
            resolved, or if we are required to by law. On termination, your licence to the content ends
            immediately. Sections on intellectual property, disclaimers and liability survive termination.
          </p>

          <h2>12. Governing law</h2>
          <p>
            These terms are governed by the laws of the Federal Republic of Nigeria, and the courts of
            Nigeria have jurisdiction over any dispute. If you are a consumer resident elsewhere, this does
            not deprive you of the protection of mandatory consumer laws in your own country.
          </p>

          <h2>13. Changes to these terms</h2>
          <p>
            We may update these terms as the service develops. If a change materially affects your rights,
            we will tell you by email at least 30 days before it takes effect. Continuing to use Learnoir
            after that date means you accept the updated terms.
          </p>

          <h2>14. Contact us</h2>
          <p>
            Questions about these terms:{' '}
            <a href="mailto:hello@learnoir.com">hello@learnoir.com</a>. Schools and partnerships:{' '}
            <a href="mailto:partners@learnoir.com">partners@learnoir.com</a>.
          </p>

          <p>
            These terms should be read together with our{' '}
            <a href="/privacy">privacy policy</a>, which explains how we handle personal data.
          </p>
        </div>
      </section>
    </>
  );
}
