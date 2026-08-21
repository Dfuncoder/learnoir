import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="wrap">
        <div className="foot-grid">
          <div className="foot-brand">
            <Link className="logo" href="/">Learnin<b>gale</b></Link>
            <p>
              The school curriculum, taught through the interests students already love —
              anime, cinema, football and more. Curriculum-aligned video lessons for
              Grades 7–12, on any phone, anywhere in the world.
            </p>
          </div>
          <div className="foot-col">
            <h4>Product</h4>
            <Link href="/library">Lesson library</Link>
            <Link href="/pricing">Pricing</Link>
            <Link href="/#tracks">Interest tracks</Link>
            <Link href="/#how">How it works</Link>
          </div>
          <div className="foot-col">
            <h4>Company</h4>
            <Link href="/about">About us</Link>
            <Link href="/contact">Contact</Link>
            <Link href="/faq">FAQ</Link>
          </div>
          <div className="foot-col">
            <h4>Legal</h4>
            <Link href="/privacy">Privacy policy</Link>
            <Link href="/terms">Terms of service</Link>
          </div>
        </div>
        <div className="foot-base">
          <span>© {new Date().getFullYear()} Learningale. All rights reserved.</span>
          <span>Made for curious minds, everywhere.</span>
        </div>
      </div>
    </footer>
  );
}
