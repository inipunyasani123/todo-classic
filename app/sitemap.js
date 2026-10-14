const URL = 'https://todo-classic.pintuweb.id';

export default function sitemap() {
  const now = new Date();
  return ['', '/rekap', '/panduan'].map((p) => ({ url: URL + p, lastModified: now, changeFrequency: 'monthly', priority: p ? 0.6 : 1 }));
}
