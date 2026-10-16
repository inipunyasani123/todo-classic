import { SITE_URL } from '@/lib/seo';

// Tanggal tetap (bukan waktu build) supaya lastmod hanya berubah bila isinya berubah.
const UPDATED = '2026-10-16';

export default function sitemap() {
  return ['', '/rekap', '/panduan'].map((p) => ({ url: SITE_URL + p, lastModified: UPDATED, changeFrequency: 'monthly', priority: p ? 0.6 : 1 }));
}
