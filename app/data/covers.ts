import type { Project } from './projects';

// Covers used on the home page and the work index. Brand case studies use their realistic mockups;
// other projects use light, web-sized versions of their artwork (the originals are very large).
const COVERS: Record<string, string> = {
  krishivet: '/mockups/photo/kv-laptop.webp',
  'roboflight-brand': '/mockups/photo/rf-laptop.webp',
  miyabi: '/home/miyabi.webp',
  'smak-skin-care': '/home/smak.webp',
  'sm-care': '/home/sm-care.webp',
  simplyfresh: '/home/simplyfresh.webp',
  'bss-event-visuals': '/home/bss.webp',
  'the-feyre': '/home/feyre.webp',
  'acc-it-club': '/home/acc-it.webp',
};

// where to anchor a cropped cover so the important part stays in view
export const FOCUS: Record<string, string> = { 'the-feyre': '22% 50%', 'sm-care': '30% 50%' };

export function coverFor(p: Project): { kind: 'image' | 'video'; src: string; poster?: string; focus?: string } {
  if (COVERS[p.slug]) return { kind: 'image', src: COVERS[p.slug], focus: FOCUS[p.slug] };
  if (p.coverVideo) return { kind: 'video', src: p.coverVideo, poster: p.coverVideo.replace('/upload/', '/upload/so_1/').replace(/\.mp4$/, '.jpg') };
  return { kind: 'image', src: p.coverImage || '' };
}

export const CATEGORY_LABEL: Record<string, string> = {
  'UI/UX': 'Brand identity, website',
  Branding: 'Branding',
  'Social Media': 'Social media',
  Motion: 'Motion',
};

export function labelFor(p: Project) {
  if (p.slug === 'krishivet' || p.slug === 'roboflight-brand') return 'Brand identity, website';
  return CATEGORY_LABEL[p.category] || p.category;
}

export function shortTitle(p: Project) {
  const t = p.title.split(' — ')[0];
  return t === 'ROBOFLIGHT' ? 'RoboFlight' : t;
}
