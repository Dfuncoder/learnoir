const base = 'https://learningale.example';
export default function sitemap() {
  return ['', '/pricing', '/library', '/about', '/contact', '/faq'].map((p) => ({
    url: base + p,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: p === '' ? 1 : 0.7,
  }));
}
