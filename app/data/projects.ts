export type Category = 'UI/UX' | 'Social Media' | 'Motion' | 'Branding';

export interface MediaItem {
  type: 'image' | 'video' | 'youtube' | 'vimeo';
  src: string;       // file path for image/video, embed URL for youtube/vimeo
  alt?: string;
  thumbnail?: string; // optional poster for video
}

export interface Project {
  slug: string;
  title: string;
  tagline: string;
  category: Category;
  coverImage: string;
  coverVideo?: string; // optional looping video for card hover
  year: string;
  tools: string[];
  role: string;
  client?: string;
  description: string;
  challenge?: string;
  outcome?: string;
  featured: boolean;
  media: MediaItem[];
}

// ─────────────────────────────────────────────
// ADD / EDIT YOUR PROJECTS HERE
// ─────────────────────────────────────────────
export const projects: Project[] = [
  {
    slug: 'roboflight-brand',
    title: 'ROBOFLIGHT Brand Identity',
    tagline: 'Visual identity & UI design for an educational robotics platform',
    category: 'UI/UX',
    coverImage: '/projects/roboflight/cover.svg',
    year: '2024',
    tools: ['Figma', 'Adobe Illustrator'],
    role: 'UI Designer & Web Developer',
    client: 'ROBOFLIGHT',
    description:
      'Designed the complete visual identity and website UI for ROBOFLIGHT, an educational robotics platform. The goal was a modern, energetic look that resonates with students and educators.',
    challenge:
      'The existing site lacked a consistent visual language. I established a design system from scratch — color palette, typography hierarchy, icon style, and component library.',
    outcome:
      'Delivered a fully responsive UI across mobile, tablet, and desktop. The new brand increased user engagement and gave the platform a professional presence.',
    featured: true,
    media: [
      { type: 'image', src: '/projects/roboflight/cover.svg', alt: 'ROBOFLIGHT brand overview' },
      { type: 'image', src: '/projects/roboflight/screens.svg', alt: 'Screen designs' },
    ],
  },
  {
    slug: 'social-media-pack',
    title: 'Social Media Design Pack',
    tagline: 'Instagram & Facebook content templates for a lifestyle brand',
    category: 'Social Media',
    coverImage: '/projects/social/cover.svg',
    year: '2024',
    tools: ['Adobe Photoshop', 'Adobe Illustrator', 'Figma'],
    role: 'Graphic Designer',
    description:
      'Created a cohesive set of social media templates including posts, stories, reels covers, and highlight icons. Designed for a lifestyle brand targeting young adults.',
    challenge:
      'Maintaining visual consistency across formats (1:1, 4:5, 9:16) while keeping each piece engaging on its own.',
    outcome:
      "Delivered 30+ templates in a ready-to-use format, significantly reducing the client's content creation time.",
    featured: true,
    media: [
      { type: 'image', src: '/projects/social/cover.svg', alt: 'Social media pack overview' },
      { type: 'image', src: '/projects/social/stories.svg', alt: 'Story templates' },
      { type: 'image', src: '/projects/social/posts.svg', alt: 'Post templates' },
    ],
  },
  {
    slug: 'motion-reel',
    title: 'Motion Graphics Reel',
    tagline: 'Animated titles, transitions, and visual effects in Premiere Pro & After Effects',
    category: 'Motion',
    coverImage: '/projects/motion/cover.svg',
    year: '2023',
    tools: ['Adobe After Effects', 'Adobe Premiere Pro'],
    role: 'Motion Designer',
    description:
      'A collection of motion graphics projects including animated logos, kinetic typography, and video intros. Created for various events and digital content.',
    challenge:
      'Balancing creative expression with technical constraints — export formats, frame rates, and delivery specs.',
    outcome:
      'Produced polished video assets used across social platforms and event displays.',
    featured: true,
    media: [
      { type: 'image', src: '/projects/motion/cover.svg', alt: 'Motion reel thumbnail' },
      {
        type: 'youtube',
        src: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
        alt: 'Motion reel video',
      },
    ],
  },
  {
    slug: 'bss-event-visuals',
    title: 'BSS Event Visuals',
    tagline: 'Posters, banners, and digital assets for UNB student society events',
    category: 'Branding',
    coverImage: '/projects/bss/cover.svg',
    year: '2024',
    tools: ['Adobe Photoshop', 'Adobe Illustrator'],
    role: 'Graphic Designer',
    client: 'Bangladesh Student Society, UNB',
    description:
      'Designed all visual communication for society events — posters, digital banners, invitation cards, and social media announcements.',
    challenge:
      'Representing cultural themes in a modern visual language that connects with the university audience.',
    outcome:
      'Events received strong attendance; the visual identity was consistently praised for its professional quality.',
    featured: false,
    media: [
      { type: 'image', src: '/projects/bss/cover.svg', alt: 'BSS event poster' },
      { type: 'image', src: '/projects/bss/banner.svg', alt: 'Event banner' },
    ],
  },
  {
    slug: 'case-management-ui',
    title: 'Case Management UI',
    tagline: 'Dashboard design for an AI-powered customer support platform',
    category: 'UI/UX',
    coverImage: '/projects/case/cover.svg',
    year: '2024',
    tools: ['Figma', 'Next.js', 'Tailwind CSS'],
    role: 'UI/UX Designer & Developer',
    description:
      'Designed and built the interface for an OpenAI-powered case management system with a real-time analytics dashboard.',
    challenge:
      'Presenting complex data (case stats, categories, priorities) in a clean, scannable layout.',
    outcome:
      'Delivered an intuitive dashboard that reduced time-to-resolution for support agents.',
    featured: false,
    media: [
      { type: 'image', src: '/projects/case/cover.svg', alt: 'Dashboard overview' },
      { type: 'image', src: '/projects/case/detail.svg', alt: 'Detail view' },
    ],
  },
];

export const personalInfo = {
  name: 'Kazi Mostofa Sakin',
  title: 'Designer',
  tagline: 'UI/UX · Social Media · Motion · Brand',
  bio: "I'm a designer and computer science student who believes great design is invisible — it just works. I craft visual experiences across digital interfaces, social content, and motion graphics. Every pixel has a purpose.",
  behance: 'https://www.behance.net/kazimostofasakin',
  devPortfolio: 'https://kazisakin.github.io',  // your live dev portfolio URL
  email: 'kazimostofa.sakin@unb.ca',
};

export const designTools = [
  { name: 'Figma', icon: '🎨', category: 'UI/UX' },
  { name: 'Adobe XD', icon: '✏️', category: 'UI/UX' },
  { name: 'Photoshop', icon: '🖼️', category: 'Visual' },
  { name: 'Illustrator', icon: '✒️', category: 'Visual' },
  { name: 'Premiere Pro', icon: '🎬', category: 'Motion' },
  { name: 'After Effects', icon: '⚡', category: 'Motion' },
];
