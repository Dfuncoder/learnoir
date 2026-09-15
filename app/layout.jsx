import './globals.css';
import Nav from '../components/Nav';
import Footer from '../components/Footer';

export const metadata = {
  metadataBase: new URL('https://learnoir.example'),
  title: {
    default: 'Learnoir — The School Curriculum, Streaming',
    template: '%s | Learnoir',
  },
  description:
    'Learnoir teaches the full school curriculum through cinematic video lessons matched to each child\'s interests — anime, movies, football and more. Curriculum-aligned, on any phone, from ₦3,000 a month.',
  keywords: ['school curriculum video lessons', 'online learning', 'WAEC', 'alternative to private tutor', 'anime learning', 'education platform'],
  openGraph: {
    type: 'website',
    title: "Learnoir — School, but they can't stop watching.",
    description: 'The full school curriculum, taught through the stories your child already loves.',
    images: ['/hero.jpg'],
  },
  twitter: { card: 'summary_large_image' },
};

const orgLd = {
  '@context': 'https://schema.org',
  '@type': 'EducationalOrganization',
  name: 'Learnoir',
  description:
    'Video learning platform teaching the school curriculum through the styles children already love: anime, cinema, football and more.',
  offers: [
    { '@type': 'Offer', name: 'Monthly plan', price: '3000', priceCurrency: 'NGN' },
    { '@type': 'Offer', name: 'Yearly plan', price: '25000', priceCurrency: 'NGN' },
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,400;12..96,600;12..96,700;12..96,800&family=Manrope:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgLd) }} />
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
