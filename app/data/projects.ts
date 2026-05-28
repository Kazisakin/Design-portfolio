export type Category = 'UI/UX' | 'Social Media' | 'Motion' | 'Branding';

export interface MediaItem {
  type: 'image' | 'video' | 'youtube' | 'vimeo';
  src: string;       // file path for image/video, embed URL for youtube/vimeo
  alt?: string;
  thumbnail?: string; // optional poster for video
  wide?: boolean;    // spans full width in collage grid
  caption?: string;  // optional section label shown under the image
}

export interface Project {
  slug: string;
  title: string;
  tagline: string;
  category: Category;
  coverImage?: string;
  coverVideo?: string; // optional looping video for card hover
  year: string;
  tools: string[];
  role: string;
  client?: string;
  description: string;
  challenge?: string;
  outcome?: string;
  featured: boolean;
  hidden?: boolean;
  media: MediaItem[];
}

// ─────────────────────────────────────────────
// ADD / EDIT YOUR PROJECTS HERE
// ─────────────────────────────────────────────
export const projects: Project[] = [
  {
    slug: 'acc-it-club',
    title: 'ACC IT Club — Member Recruitment',
    tagline: 'Event campaign & social posts for Batch-22 recruitment drive',
    category: 'Branding',
    coverVideo: 'https://res.cloudinary.com/dshmix8ep/video/upload/v1774524522/0001_cuwc4s.mp4',
    year: '2022',
    tools: ['Adobe Photoshop', 'Adobe Illustrator'],
    role: 'Graphic Designer',
    client: 'ACC IT Club',
    description:
      'Full visual campaign for the ACC IT Club Batch-22 member recruitment. Each post in the series guides applicants through the journey — from registration to selection — using a dark techy aesthetic with bold orange gradients.',
    challenge:
      'Creating a cohesive series where each post feels like part of one story, while standing strong as a standalone piece on social media.',
    outcome:
      'A 10-piece campaign set covering every stage of the recruitment process, giving the club a sharp and professional presence for Batch-22.',
    featured: true,
    media: [
      { type: 'video', src: 'https://res.cloudinary.com/dshmix8ep/video/upload/v1774524522/0001_cuwc4s.mp4', alt: 'ACC IT Club Recruitment Video' },
      { type: 'image', src: '/projects/ACC%20IT%20CLUB/banner-01.jpg', alt: 'ACC IT Club Member Recruitment Banner' },
      { type: 'image', src: '/projects/ACC%20IT%20CLUB/reg-01-01.jpg', alt: 'Registration is Open' },
      { type: 'image', src: '/projects/ACC%20IT%20CLUB/1.png', alt: 'Start a New Journey' },
      { type: 'image', src: '/projects/ACC%20IT%20CLUB/2.png', alt: 'Fill the Form' },
      { type: 'image', src: '/projects/ACC%20IT%20CLUB/4.png', alt: 'Wait 48 Hours' },
      { type: 'image', src: '/projects/ACC%20IT%20CLUB/3.png', alt: 'Check Mail' },
      { type: 'image', src: '/projects/ACC%20IT%20CLUB/7.png', alt: 'Selection' },
      { type: 'image', src: '/projects/ACC%20IT%20CLUB/5.png', alt: 'Bootcamp' },
      { type: 'image', src: '/projects/ACC%20IT%20CLUB/6.png', alt: 'Contests' },
      { type: 'image', src: '/projects/ACC%20IT%20CLUB/8.png', alt: 'Apply Now' },
    ],
  },
  {
    slug: 'acc-eco-amica-club',
    title: 'ACC ECO AMICA CLUB',
    tagline: 'Motion & visual identity for an eco-focused student club',
    category: 'Motion',
    coverVideo: 'https://res.cloudinary.com/dshmix8ep/video/upload/3_wk2gbv.mp4',
    year: '2024',
    tools: ['Adobe Photoshop', 'Adobe Illustrator', 'Adobe After Effects'],
    role: 'Graphic Designer',
    client: 'ACC ECO AMICA CLUB',
    description:
      'Visual design and motion work created for ACC ECO AMICA CLUB. The project focused on building a strong, recognisable presence through bold graphics and engaging video content.',
    featured: true,
    media: [
      { type: 'video', src: 'https://res.cloudinary.com/dshmix8ep/video/upload/3_wk2gbv.mp4', alt: 'ACC ECO AMICA CLUB video' },
    ],
  },
  {
    slug: 'sm-care',
    title: 'SM Care',
    tagline: 'Product visuals & social posts for a skincare brand',
    category: 'Social Media',
    coverImage: '/projects/SM%20CARE/main-2.png',
    year: '2022',
    tools: ['Adobe Photoshop', 'Adobe Illustrator'],
    role: 'Graphic Designer',
    client: 'SM Care',
    description:
      'Social media creatives and product visuals for SM Care — a skincare brand behind the Collagen Mania Serum and Sweet Magic Soap. Each post was designed to communicate product benefits clearly while maintaining a fresh, premium look.',
    challenge:
      'Presenting scientific claims and ingredient highlights in a visually engaging format that feels trustworthy and appealing to a beauty-conscious audience.',
    outcome:
      'Delivered a set of polished social posts covering ingredients, benefits, results, and product features — giving SM Care a consistent and professional digital presence.',
    featured: false,
    media: [
      { type: 'image', src: '/projects/SM%20CARE/main-2.png', alt: 'SM Care — hero banner' },
      { type: 'image', src: '/projects/SM%20CARE/4bb3bd146218339.63854d4816faa.webp', alt: 'Collagen Mania Serum — ingredients' },
      { type: 'image', src: '/projects/SM%20CARE/a3f48f146218339.63854d481632b.webp', alt: 'Collagen Mania Serum — features' },
      { type: 'image', src: '/projects/SM%20CARE/9393aa146218339.63854d4817be2.webp', alt: 'Collagen Mania Serum — benefits' },
      { type: 'image', src: '/projects/SM%20CARE/cb721c146218339.63854d48193ba.webp', alt: 'Collagen Mania Serum — results' },
    ],
  },
  {
    slug: 'miyabi',
    title: 'Miyabi — Brand Identity',
    tagline: 'Logo, packaging & visual identity for a Japanese-inspired skincare brand',
    category: 'Branding',
    coverImage: '/Miyabi/6c6757135223917.61e4594340365.webp',
    year: '2021',
    tools: ['Adobe Photoshop', 'Adobe Illustrator'],
    role: 'Brand Designer',
    client: 'Miyabi Skincare',
    description:
      'Full brand identity for Miyabi (みやび) — a Japanese-inspired skincare brand rooted in the concept of refined elegance. The identity blends a sakura-petal icon with a modern serif wordmark, rendered in soft blush pinks to evoke purity and luxury.',
    challenge:
      'Balancing Eastern aesthetic influences with a contemporary, globally-appealing visual language — the brand needed to feel authentically Japanese without feeling derivative.',
    outcome:
      'Delivered a cohesive identity system including logo, packaging design, and brand mockups. The result is a refined, premium feel that translates beautifully across product and digital touchpoints.',
    featured: true,
    media: [
      { type: 'image', src: '/Miyabi/6c6757135223917.61e4594340365.webp', alt: 'Miyabi — brand logo editorial' },
      { type: 'image', src: '/Miyabi/489415135223917.61e459433f93e.webp', alt: 'Miyabi — logo on model' },
      { type: 'image', src: '/Miyabi/bfc772135223917.61e4594340aac.webp', alt: 'Miyabi — product packaging mockup' },
      { type: 'image', src: '/Miyabi/1c24cf135223917.61e459433f163.webp', alt: 'Miyabi — cream jar product shot' },
    ],
  },
  {
    slug: 'smak-skin-care',
    title: 'SMAK Skin Care',
    tagline: 'Logo & brand identity for a luxury skincare brand',
    category: 'Branding',
    coverImage: '/projects/SMAK%20SKIN%20CARE/0062a9138394399.621ce68c8fc17.webp',
    year: '2022',
    tools: ['Adobe Photoshop', 'Adobe Illustrator'],
    role: 'Brand Designer',
    client: 'SMAK Skin Care',
    description:
      'Brand identity for SMAK Skin Care — a luxury skincare brand built around deep crimson and gold. The identity features a custom serif wordmark with a wave motif icon, evoking richness, depth, and timeless elegance.',
    challenge:
      'Creating a logo that reads as high-end and editorial without relying on clichéd beauty tropes — the mark needed to feel unique and ownable.',
    outcome:
      'Delivered a complete brand mark and editorial visual that positions SMAK confidently in the premium skincare space.',
    featured: true,
    media: [
      { type: 'image', src: '/projects/SMAK%20SKIN%20CARE/0062a9138394399.621ce68c8fc17.webp', alt: 'SMAK Skin Care — editorial brand visual' },
      { type: 'image', src: '/projects/SMAK%20SKIN%20CARE/a99e5a138394399.621ce68c8ee86.webp', alt: 'SMAK Skin Care — logo lockup' },
    ],
  },
  {
    slug: 'the-feyre',
    title: 'The Feyre',
    tagline: 'Brand identity & campaign visuals for a premium skincare brand',
    category: 'Branding',
    coverImage: '/projects/THE%20Feyere/1-01.png',
    coverVideo: 'https://res.cloudinary.com/dshmix8ep/video/upload/4_1_v4g4os.mp4',
    year: '2022',
    tools: ['Adobe Photoshop', 'Adobe Illustrator', 'Adobe Premiere Pro'],
    role: 'Brand Designer',
    client: 'The Feyre',
    description:
      'Brand identity and campaign visuals for The Feyre — a premium skincare brand built around the idea of investing in your skin. The identity centres on a clean T|F monogram, soft pinks, and a tone that blends confidence with elegance.',
    challenge:
      'Crafting visuals that feel premium and editorial without losing the warmth and approachability that skincare brands need to connect with their audience.',
    outcome:
      'Delivered a cohesive brand campaign including hero banner, motion video, and visual assets that give The Feyre a strong, recognisable presence across digital channels.',
    featured: true,
    media: [
      { type: 'video', src: 'https://res.cloudinary.com/dshmix8ep/video/upload/4_1_v4g4os.mp4', alt: 'The Feyre — brand video' },
      { type: 'image', src: '/projects/THE%20Feyere/1-01.png', alt: 'The Feyre — hero banner' },
    ],
  },
  {
    slug: 'the-feyre-serum',
    title: 'The Feyre Serum',
    tagline: 'Product video & visual identity for a luxury skincare serum brand',
    category: 'Branding',
    coverVideo: 'https://res.cloudinary.com/dshmix8ep/video/upload/WhatsApp_Video_2022-05-01_at_5.25.23_PM_gw55ap.mp4',
    year: '2022',
    tools: ['Adobe Photoshop', 'Adobe Illustrator', 'Adobe Premiere Pro'],
    role: 'Graphic Designer',
    client: 'The Feyre Serum',
    description:
      'Brand visuals and product video for The Feyre Serum — a luxury skincare line. The project centred on crafting an elegant, high-end aesthetic that communicates purity, quality, and sophistication.',
    challenge:
      'Translating the premium feel of a physical product into compelling digital visuals that stand out in a competitive beauty market.',
    outcome:
      'Produced a polished product video and visual assets that elevated the brand\'s presence across social media and digital channels.',
    featured: true,
    media: [
      { type: 'video', src: 'https://res.cloudinary.com/dshmix8ep/video/upload/WhatsApp_Video_2022-05-01_at_5.25.23_PM_gw55ap.mp4', alt: 'The Feyre Serum — product video' },
    ],
  },
  {
    slug: 'simplyfresh',
    title: 'SimplyFresh Social Media',
    tagline: 'Bold food visuals & promotional posts for a Fredericton restaurant',
    category: 'Social Media',
    coverImage: '/projects/simplyfresh/Untitled-1.png',
    year: '2024',
    tools: ['Adobe Photoshop', 'Adobe Illustrator'],
    role: 'Graphic Designer',
    client: 'SimplyFresh, Fredericton NB',
    description:
      'A full set of social media creatives for SimplyFresh — a dine-in restaurant at 872 Regent Street, Fredericton. Posts span daily specials, weekend deals, and seasonal promotions, all built around a warm amber-and-red palette that mirrors the brand\'s energy.',
    challenge:
      'Each dish needed to feel crave-worthy at a glance. Balancing high-contrast typography with vibrant food photography while keeping the layout clean across both square posts and portrait stories.',
    outcome:
      'Delivered a cohesive library of ready-to-publish posts covering biriyani, shawarma, pizza, kebab, and ice cream — giving the brand a consistent, appetising presence across Instagram and Facebook.',
    featured: true,
    media: [
      { type: 'image', src: '/projects/simplyfresh/Untitled-1.png', alt: 'SimplyFresh full campaign mockup' },
      { type: 'image', src: '/projects/simplyfresh/22.jpg', alt: 'Chicken Biriyani Everyday — story post' },
      { type: 'image', src: '/projects/simplyfresh/3.png', alt: 'Chicken Biriyani Weekend Special — 50% off post' },
      { type: 'image', src: '/projects/simplyfresh/35.png', alt: 'Super Delicious Shawarma post' },
      { type: 'image', src: '/projects/simplyfresh/Food-Social-Media-Banner-03.jpg', alt: 'Kebab Supreme post' },
      { type: 'image', src: '/projects/simplyfresh/22.png', alt: 'Pizza Delicious Everyday post' },
      { type: 'image', src: '/projects/simplyfresh/ice cream.jpg', alt: 'Ice Cream All You Want post' },
      { type: 'image', src: '/projects/simplyfresh/week-Recovered03.jpg', alt: 'Enjoy Weekend Special post' },
    ],
  },
  {
    slug: 'krishivet',
    title: 'KrishiVet',
    tagline: 'Full website UI for a Canadian-formulated animal nutrition brand in Bangladesh',
    category: 'UI/UX',
    coverImage: '/projects/krishivet/home-01-hero.png',
    year: '2025',
    tools: ['Figma', 'Next.js', 'Tailwind CSS'],
    role: 'UI Designer & Web Developer',
    client: 'KrishiVet Nutra Solution',
    description:
      'Designed and developed the full website for KrishiVet — a science-driven animal nutrition brand bringing Canadian-formulated supplements to Bangladeshi farmers. The site spans product listings, why-us, testimonials, FAQ, company profile, and contact pages.',
    challenge:
      'Communicating scientific credibility and trust to a farming audience while keeping the UI clean, accessible, and easy to navigate across all devices.',
    outcome:
      'A fully responsive multi-page website with a warm, nature-grounded visual identity — live at krishivet.ca.',
    featured: true,
    media: [
      { type: 'image', src: '/projects/krishivet/home-01-hero.png',           alt: 'KrishiVet — Hero' },
      { type: 'image', src: '/projects/krishivet/home-02-mission.png',         alt: 'KrishiVet — Mission' },
      { type: 'image', src: '/projects/krishivet/home-03-products.png',        alt: 'KrishiVet — Products' },
      { type: 'image', src: '/projects/krishivet/home-04-testimonials.png',    alt: 'KrishiVet — Testimonials' },
      { type: 'image', src: '/projects/krishivet/home-05-coming-soon.png',     alt: 'KrishiVet — Coming Soon' },
      { type: 'image', src: '/projects/krishivet/home-06-quality.png',         alt: 'KrishiVet — Quality Commitment' },
      { type: 'image', src: '/projects/krishivet/home-07-cta.png',             alt: 'KrishiVet — CTA Banner' },
      { type: 'image', src: '/projects/krishivet/page-products.png',           alt: 'KrishiVet — Products Page' },
      { type: 'image', src: '/projects/krishivet/page-why-krishivet.png',      alt: 'KrishiVet — Why KrishiVet Page' },
      { type: 'image', src: '/projects/krishivet/page-about.png',              alt: 'KrishiVet — About Page' },
      { type: 'image', src: '/projects/krishivet/page-zinc-supplement.png',    alt: 'KrishiVet — Zinc Supplement Page' },
      { type: 'image', src: '/projects/krishivet/page-testimonials.png',       alt: 'KrishiVet — Testimonials Page' },
      { type: 'image', src: '/projects/krishivet/page-company-profile.png',    alt: 'KrishiVet — Company Profile Page' },
      { type: 'image', src: '/projects/krishivet/page-faq.png',                alt: 'KrishiVet — FAQ Page' },
      { type: 'image', src: '/projects/krishivet/page-contact.png',            alt: 'KrishiVet — Contact Page' },
      { type: 'image', src: '/projects/krishivet/footer.png',                  alt: 'KrishiVet — Footer' },
    ],
  },
  {
    slug: 'roboflight-brand',
    title: 'ROBOFLIGHT',
    tagline: 'Website design & development for a hands-on STEM education platform in New Brunswick',
    category: 'UI/UX',
    coverImage: '/projects/roboflight/1.png',
    year: '2024',
    tools: ['Figma', 'Next.js', 'Tailwind CSS', 'Adobe Illustrator'],
    role: 'UI Designer & Web Developer',
    client: 'RoboFlight — New Brunswick, Canada',
    description:
      'RoboFlight is a New Brunswick-based STEM education program teaching robotics, drone building, coding, and circuitry to students across 3 schools. I designed and developed the full public website from scratch — shaping the visual identity, information architecture, and UI system that communicates the brand\'s mission to parents, students, and school partners.',
    challenge:
      'The biggest tension was tonal: the platform needed to feel technically credible (to educators and parents) while still feeling exciting and accessible to kids. A single visual system had to carry two completely different moods — a dark, electric hero with cyan accents for energy, and a clean white interior for clarity and trust. Every section had to earn its place in the enrolment journey.',
    outcome:
      'Delivered a fully responsive 9-section website covering hero, value proposition, founder story, course catalogue (Quadcopter Drone, Basic Robotics, RC Plane Making), an interactive Arduino DIY module, transparent pricing, partner schools, and an enrolment contact form — all live on Vercel.',
    featured: true,
    media: [
      {
        type: 'image',
        src: '/projects/roboflight/1.png',
        alt: 'ROBOFLIGHT — Hero section',
        caption: 'Hero',
        wide: true,
      },
      {
        type: 'image',
        src: '/projects/roboflight/2.png',
        alt: 'ROBOFLIGHT — Why RoboFlight feature cards',
        caption: 'Value Proposition',
      },
      {
        type: 'image',
        src: '/projects/roboflight/3.png',
        alt: 'ROBOFLIGHT — Founder story & about section',
        caption: 'Founder Story',
      },
      {
        type: 'image',
        src: '/projects/roboflight/4.png',
        alt: 'ROBOFLIGHT — Courses offered: Drone, Robotics, RC Plane',
        caption: 'Course Catalogue',
        wide: true,
      },
      {
        type: 'image',
        src: '/projects/roboflight/5.png',
        alt: 'ROBOFLIGHT — Arduino DIY interactive module',
        caption: 'Arduino DIY Module',
        wide: true,
      },
      {
        type: 'image',
        src: '/projects/roboflight/6.png',
        alt: 'ROBOFLIGHT — Transparent pricing tiers',
        caption: 'Pricing',
        wide: true,
      },
      {
        type: 'image',
        src: '/projects/roboflight/7.png',
        alt: 'ROBOFLIGHT — Partner schools across New Brunswick',
        caption: 'Partner Schools',
      },
      {
        type: 'image',
        src: '/projects/roboflight/8.png',
        alt: 'ROBOFLIGHT — Enrol your child contact form',
        caption: 'Enrolment Form',
      },
      {
        type: 'image',
        src: '/projects/roboflight/9.png',
        alt: 'ROBOFLIGHT — Footer with quick links and social',
        caption: 'Footer',
        wide: true,
      },
    ],
  },
  {
    slug: 'social-media-pack',
    hidden: true,
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
    hidden: true,
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
    tagline: 'Posters, banners & print for Bangladesh Student Society, UNB',
    category: 'Branding',
    coverImage: '/projects/bss/fall.jpg',
    year: '2023',
    tools: ['Adobe Photoshop', 'Adobe Illustrator'],
    role: 'Graphic Designer',
    client: 'Bangladesh Student Society, UNB',
    description:
      'Complete visual package for BSS events at the University of New Brunswick — spanning Fall Orientation 2023, Winter registration campaigns, wide-format print banners, and social media posts.',
    challenge:
      'Representing cultural warmth and seasonal themes while maintaining a clean, university-appropriate aesthetic across vastly different formats — from square social posts to large-scale print banners.',
    outcome:
      'Delivered a full multi-format campaign used across digital and print. The Fall Orientation series drove strong community turnout.',
    featured: false,
    media: [
      { type: 'image', src: '/projects/bss/fall.jpg', alt: 'Fall Orientation 2023 — main poster' },
      { type: 'image', src: '/projects/bss/gfoprm.jpg', alt: 'Fall Orientation — wide banner' },
      { type: 'image', src: '/projects/bss/deadline.jpg', alt: 'Registration Deadline — Oct 10' },
      { type: 'image', src: '/projects/bss/dealine.jpg', alt: 'Registration Deadline Extended — Oct 13' },
      { type: 'image', src: '/projects/bss/winter registration-01-01.png', alt: 'Winter Registration — Now Register' },
      { type: 'image', src: '/projects/bss/Untitled-2-01.png', alt: 'Welcome to BSS — banner' },
      { type: 'image', src: '/projects/bss/1-01.png', alt: 'BSS print material' },
    ],
  },
  {
    slug: 'case-management-ui',
    hidden: true,
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
