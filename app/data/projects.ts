export type Category = 'UI/UX' | 'Social Media' | 'Motion' | 'Branding';

export interface MediaItem {
  type: 'image' | 'video' | 'youtube' | 'vimeo';
  src: string;       // file path for image/video, embed URL for youtube/vimeo
  alt?: string;
  thumbnail?: string; // optional poster for video
  wide?: boolean;    // spans full width in collage grid
  caption?: string;  // optional section label shown under the image
  description?: string; // one or two sentences about this screen (brand case studies)
}

export interface Brand {
  name: string;
  summary: string;
  logo: string;
  logoCards: [string, string]; // backgrounds for the two logo panels
  logoBg: string;
  colors: { name: string; hex: string; role: string }[];
  font: { name: string; note: string; weights: number[]; sample: [string, string]; sampleAccent: string; body: string };
  buttons: { label: string; bg: string; fg: string; border?: string; onDark?: boolean }[];
  headlines: [string, string][];
  headlineAccent: string;
  headlineNote: string;
}

export interface StoryBoard { src: string; title: string; note?: string }
export interface CaseStory {
  cover: string;            // hero board
  idea: { src: string; note: string };   // brand idea / statement board
  glance?: string;          // optional "at a glance" mosaic
  identity: StoryBoard[];   // chapter 01
  websiteOpener: string;    // chapter 02 opener (devices board)
  world: StoryBoard[];      // chapter 03 (concept applications)
  worldNote: string;
  stats: { value: number; suffix?: string; label: string }[];
  closing: string;
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
  challenge?: string;     // shown as "The brief"
  approach?: string[];    // shown as numbered steps
  deliverables?: string[];
  outcome?: string;       // shown as "The result"
  featured: boolean;
  hidden?: boolean;
  liveUrl?: string;
  media: MediaItem[];
  brand?: Brand;
  presentation?: string[]; // full-width brand boards, shown Behance-style
  presentationNote?: string;
  story?: CaseStory; // brand case studies: chaptered layout with 3D motion
}

// ─────────────────────────────────────────────
// ADD / EDIT YOUR PROJECTS HERE
// ─────────────────────────────────────────────
export const projects: Project[] = [
  {
    slug: 'acc-it-club',
    title: 'ACC IT Club — Member Recruitment',
    tagline: "A recruitment campaign that guides applicants through every step",
    category: 'Branding',
    coverVideo: 'https://res.cloudinary.com/dshmix8ep/video/upload/v1774524522/0001_cuwc4s.mp4',
    year: '2022',
    tools: ['Adobe Photoshop', 'Adobe Illustrator'],
    role: 'Graphic Designer',
    client: 'ACC IT Club',
    description: "ACC IT Club needed a campaign for its Batch-22 member recruitment. I designed a series of social posts and a short video that take applicants from the first announcement to the final selection, one step at a time.",
    challenge: "The club wanted students to understand the whole process at a glance: how to register, what happens after they apply, and what they gain once selected. Each post had to work on its own in a busy feed while still reading as part of one story.",
    approach: ["Mapped the recruitment journey into clear steps: register, fill in the form, wait 48 hours, check email, selection, bootcamp and contests.", "Created a dark, technical look with bold orange gradients, so the series felt right for an IT club.", "Used one layout system across every post, so the steps read in order when someone scrolls through the page.", "Turned the key visuals into a short promotional video for the launch."],
    deliverables: ["Launch banner", "Registration announcement", "Eight step-by-step social posts", "Promotional video"],
    outcome: "A complete and consistent campaign that covered every stage of recruitment and gave the club a professional presence for Batch-22.",
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
    tagline: "Motion and visual identity for an environmental student club",
    category: 'Motion',
    coverVideo: 'https://res.cloudinary.com/dshmix8ep/video/upload/3_wk2gbv.mp4',
    year: '2024',
    tools: ['Adobe Photoshop', 'Adobe Illustrator', 'Adobe After Effects'],
    role: 'Graphic Designer',
    client: 'ACC ECO AMICA CLUB',
    description: "Motion and visual identity work for ACC ECO AMICA, a student club focused on the environment.",
    challenge: "The club needed a look that felt fresh and positive, and a video that could introduce it quickly on social media.",
    approach: ["Developed a set of bold graphics built around the club's environmental focus.", "Animated the graphics in After Effects so the identity works in motion, not only in still posts.", "Edited the final piece into a short video that is easy to share."],
    deliverables: ["Identity graphics", "Animated promotional video"],
    outcome: "A recognisable look for the club and a motion piece it could share across its channels.",
    featured: true,
    media: [
      { type: 'video', src: 'https://res.cloudinary.com/dshmix8ep/video/upload/3_wk2gbv.mp4', alt: 'ACC ECO AMICA CLUB video' },
    ],
  },
  {
    slug: 'sm-care',
    title: 'SM Care',
    tagline: "Product visuals and social posts for a skincare brand",
    category: 'Social Media',
    coverImage: '/projects/SM%20CARE/main-2.png',
    year: '2022',
    tools: ['Adobe Photoshop', 'Adobe Illustrator'],
    role: 'Graphic Designer',
    client: 'SM Care',
    description: "Social media visuals for SM Care, the skincare brand behind Collagen Mania Serum and Sweet Magic Soap.",
    challenge: "The posts had to explain ingredients and benefits clearly and build trust, while still looking premium enough for a beauty audience.",
    approach: ["Split the product story into separate posts for ingredients, features, benefits and results.", "Paired clean product visuals with short, scannable text, so each claim is easy to read.", "Kept one colour and type system across the series, so it reads as one brand on the feed."],
    deliverables: ["Hero banner", "Ingredients post", "Features post", "Benefits post", "Results post"],
    outcome: "A consistent set of ready-to-publish posts that gave SM Care a clear and professional presence online.",
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
    tagline: "Logo, packaging and visual identity for a Japanese-inspired skincare brand",
    category: 'Branding',
    coverImage: '/Miyabi/6c6757135223917.61e4594340365.webp',
    year: '2021',
    tools: ['Adobe Photoshop', 'Adobe Illustrator'],
    role: 'Brand Designer',
    client: 'Miyabi Skincare',
    description: "A brand identity for Miyabi (みやび), a Japanese-inspired skincare brand. The name refers to refined elegance, and the whole identity is built around that idea.",
    challenge: "The brand needed to feel authentically Japanese without relying on clichés, and it had to work equally well on packaging and on screen.",
    approach: ["Designed a sakura-petal icon paired with a modern serif wordmark.", "Chose a palette of soft blush pinks to suggest purity and care.", "Applied the identity to packaging and product mockups to test it in real use."],
    deliverables: ["Logo and wordmark", "Colour palette", "Packaging design", "Brand mockups"],
    outcome: "A refined identity system that carries the same premium feel from the product to the screen.",
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
    tagline: "Logo and brand identity for a luxury skincare brand",
    category: 'Branding',
    coverImage: '/projects/SMAK%20SKIN%20CARE/0062a9138394399.621ce68c8fc17.webp',
    year: '2022',
    tools: ['Adobe Photoshop', 'Adobe Illustrator'],
    role: 'Brand Designer',
    client: 'SMAK Skin Care',
    description: "Logo and brand identity for SMAK Skin Care, a luxury skincare brand.",
    challenge: "The mark needed to feel high-end and editorial, and to stand apart from the usual beauty-brand look.",
    approach: ["Designed a custom serif wordmark for a confident, editorial tone.", "Added a wave motif as the icon to suggest flow and depth.", "Built the palette around deep crimson and gold for a rich, premium feel."],
    deliverables: ["Logo lockup", "Colour palette", "Editorial brand visual"],
    outcome: "A distinctive brand mark that places SMAK confidently in the premium skincare market.",
    featured: true,
    media: [
      { type: 'image', src: '/projects/SMAK%20SKIN%20CARE/0062a9138394399.621ce68c8fc17.webp', alt: 'SMAK Skin Care — editorial brand visual' },
      { type: 'image', src: '/projects/SMAK%20SKIN%20CARE/a99e5a138394399.621ce68c8ee86.webp', alt: 'SMAK Skin Care — logo lockup' },
    ],
  },
  {
    slug: 'the-feyre',
    title: 'The Feyre',
    tagline: "Brand identity and campaign visuals for a premium skincare brand",
    category: 'Branding',
    coverImage: '/projects/THE%20Feyere/1-01.png',
    coverVideo: 'https://res.cloudinary.com/dshmix8ep/video/upload/4_1_v4g4os.mp4',
    year: '2022',
    tools: ['Adobe Photoshop', 'Adobe Illustrator', 'Adobe Premiere Pro'],
    role: 'Brand Designer',
    client: 'The Feyre',
    description: "Brand identity and campaign visuals for The Feyre, a premium skincare brand built around the idea of investing in your skin.",
    challenge: "The visuals had to feel premium and editorial while keeping the warmth people expect from a skincare brand.",
    approach: ["Designed a clean T|F monogram as the core of the identity.", "Set a soft pink palette and a tone of voice that balances confidence with elegance.", "Extended the identity into a hero banner and a short brand video."],
    deliverables: ["T|F monogram", "Hero banner", "Brand video"],
    outcome: "A cohesive campaign that gives The Feyre a recognisable presence across its digital channels.",
    featured: true,
    media: [
      { type: 'video', src: 'https://res.cloudinary.com/dshmix8ep/video/upload/4_1_v4g4os.mp4', alt: 'The Feyre — brand video' },
      { type: 'image', src: '/projects/THE%20Feyere/1-01.png', alt: 'The Feyre — hero banner' },
    ],
  },
  {
    slug: 'the-feyre-serum',
    title: 'The Feyre Serum',
    tagline: "Product video and visuals for a luxury skincare serum",
    category: 'Branding',
    coverVideo: 'https://res.cloudinary.com/dshmix8ep/video/upload/WhatsApp_Video_2022-05-01_at_5.25.23_PM_gw55ap.mp4',
    year: '2022',
    tools: ['Adobe Photoshop', 'Adobe Illustrator', 'Adobe Premiere Pro'],
    role: 'Graphic Designer',
    client: 'The Feyre Serum',
    description: "A product video and supporting visuals for The Feyre Serum, part of a luxury skincare line.",
    challenge: "The goal was to carry the premium feel of the physical product into digital content that stands out in a crowded beauty market.",
    approach: ["Built the visuals around purity, quality and a high-end finish.", "Edited the product video in Premiere Pro for social media.", "Kept the look consistent with The Feyre's wider brand identity."],
    deliverables: ["Product video", "Supporting brand visuals"],
    outcome: "A polished product video that strengthened the brand's presence on social media.",
    featured: true,
    media: [
      { type: 'video', src: 'https://res.cloudinary.com/dshmix8ep/video/upload/WhatsApp_Video_2022-05-01_at_5.25.23_PM_gw55ap.mp4', alt: 'The Feyre Serum — product video' },
    ],
  },
  {
    slug: 'simplyfresh',
    title: 'SimplyFresh Social Media',
    tagline: "Food visuals and promotional posts for a Fredericton restaurant",
    category: 'Social Media',
    coverImage: '/projects/simplyfresh/Untitled-1.png',
    year: '2024',
    tools: ['Adobe Photoshop', 'Adobe Illustrator'],
    role: 'Graphic Designer',
    client: 'SimplyFresh, Fredericton NB',
    description: "Social media content for SimplyFresh, a dine-in restaurant on Regent Street in Fredericton, New Brunswick.",
    challenge: "Every dish had to look appetising at a glance, and each design had to work as both a square post and a portrait story.",
    approach: ["Created a warm amber-and-red palette that matches the restaurant's energy.", "Paired large, high-contrast type with vibrant food photography, so each offer reads instantly.", "Designed a reusable layout for daily specials, weekend deals and seasonal promotions."],
    deliverables: ["Campaign overview", "Daily special posts", "Weekend deal posts", "Story formats"],
    outcome: "A ready-to-publish library of posts covering biriyani, shawarma, pizza, kebab and ice cream, giving the restaurant a consistent look on Instagram and Facebook.",
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
    tagline: "Brand identity system and website for an animal nutrition brand",
    category: 'UI/UX',
    coverImage: '/projects/case-shots/krishivet-home.webp',
    year: '2025',
    tools: ['Figma', 'Next.js', 'Tailwind CSS'],
    role: 'UI Designer & Web Developer',
    client: 'KrishiVet Nutra Solution',
    description: "I designed and built the website for KrishiVet, an animal nutrition brand that brings Canadian-formulated supplements to farmers in Bangladesh.",
    challenge: "The site had to build trust with a farming audience by explaining the science in simple terms, and it had to be easy to use on any device.",
    approach: ["Planned the structure around the questions farmers ask: what the products do, why they can be trusted and how to order.", "Designed the interface in Figma with a warm, natural visual style.", "Built the site with Next.js and Tailwind CSS, fully responsive on phones, tablets and desktops."],
    deliverables: ["Home page", "Products and product detail pages", "Why KrishiVet, About and Company Profile pages", "Testimonials, FAQ and Contact pages"],
    outcome: "A complete multi-page website, live at krishivet.ca.",
    featured: true,
    liveUrl: 'https://krishivet.ca',
    media: [
      { type: 'image', src: '/projects/case-shots/krishivet-home.webp', alt: "Krishivet \u2014 Home page on desktop, tablet and phone", caption: "Home page", description: "A full-bleed farm photo and a two-part headline introduce the brand in one line, with the main action, Explore products, in forest green." },
      { type: 'image', src: '/projects/case-shots/krishivet-products-section.webp', alt: "Krishivet \u2014 Product range on desktop, tablet and phone", caption: "Product range", description: "Four formulations in a swipeable row of photo cards, so farmers can compare products at a glance on any screen." },
      { type: 'image', src: '/projects/case-shots/krishivet-process.webp', alt: "Krishivet \u2014 Our process on desktop, tablet and phone", caption: "Our process", description: "Research, formulation, field trials and quality release, laid out as four numbered steps that build trust in the science." },
      { type: 'image', src: '/projects/case-shots/krishivet-products-page.webp', alt: "Krishivet \u2014 Product catalogue on desktop, tablet and phone", caption: "Product catalogue", description: "The catalogue opens with one clear promise before listing each formulation, keeping the same photo-led style as the home page." },
      { type: 'image', src: '/projects/case-shots/krishivet-why.webp', alt: "Krishivet \u2014 Why KrishiVet on desktop, tablet and phone", caption: "Why KrishiVet", description: "Proof comes first: farms served, reorder rate, PhD scientists and countries, shown as large, easy-to-read figures." },
    ],
    story: {
          "cover": "/projects/krishivet-brand/krishivet-brand-01-cover.jpg",
          "idea": {
                "src": "/projects/krishivet-brand/krishivet-brand-03-statement.jpg",
                "note": "KrishiVet sits between two worlds: Canadian lab science and Bangladeshi farms. The identity pairs the trust of science with the warmth of the farm."
          },
          "glance": "/projects/krishivet-brand/krishivet-brand-02-mosaic.jpg",
          "identity": [
                {
                      "src": "/projects/krishivet-brand/krishivet-brand-04-logo.jpg",
                      "title": "The mark",
                      "note": "A cow and leaf in leaf green above a confident wordmark: farming and nature in one symbol."
                },
                {
                      "src": "/projects/krishivet-brand/krishivet-brand-05-construction.jpg",
                      "title": "Built on a grid",
                      "note": "Fixed proportions and generous clear space keep the logo consistent on labels, signs and screens."
                },
                {
                      "src": "/projects/krishivet-brand/krishivet-brand-06-colour.jpg",
                      "title": "Earth, leaf and harvest",
                      "note": "Espresso and forest green carry trust; mint and harvest gold add warmth; paper keeps everything light."
                },
                {
                      "src": "/projects/krishivet-brand/krishivet-brand-07-type.jpg",
                      "title": "Type and voice",
                      "note": "Manrope with a two-part headline system: a plain statement, then the payoff in green."
                },
                {
                      "src": "/projects/krishivet-brand/krishivet-brand-08-photography.jpg",
                      "title": "Photography",
                      "note": "Real farmers with their animals in natural light, never staged studio stock."
                }
          ],
          "websiteOpener": "/projects/krishivet-brand/krishivet-brand-12-devices.jpg",
          "world": [
                {
                      "src": "/projects/krishivet-brand/krishivet-brand-10-posters.jpg",
                      "title": "Posters"
                },
                {
                      "src": "/projects/krishivet-brand/krishivet-brand-11-social.jpg",
                      "title": "Social posts"
                },
                {
                      "src": "/projects/krishivet-brand/krishivet-brand-13-phones.jpg",
                      "title": "On the phone"
                }
          ],
          "worldNote": "How the identity carries beyond the website. Posters and social posts are concept applications.",
          "stats": [
                {
                      "value": 500,
                      "suffix": "+",
                      "label": "Farms served"
                },
                {
                      "value": 98,
                      "suffix": "%",
                      "label": "Reorder rate"
                },
                {
                      "value": 4,
                      "label": "Formulations"
                }
          ],
          "closing": "/projects/krishivet-brand/krishivet-brand-14-close.jpg"
    },
    presentationNote: 'Logo, colour, type, photography and voice applied across posters, social media and the website. Posters and social posts are concept applications.',
    presentation: [
      '/projects/krishivet-brand/krishivet-brand-01-cover.jpg',
      '/projects/krishivet-brand/krishivet-brand-02-mosaic.jpg',
      '/projects/krishivet-brand/krishivet-brand-03-statement.jpg',
      '/projects/krishivet-brand/krishivet-brand-04-logo.jpg',
      '/projects/krishivet-brand/krishivet-brand-05-construction.jpg',
      '/projects/krishivet-brand/krishivet-brand-06-colour.jpg',
      '/projects/krishivet-brand/krishivet-brand-07-type.jpg',
      '/projects/krishivet-brand/krishivet-brand-08-photography.jpg',
      '/projects/krishivet-brand/krishivet-brand-10-posters.jpg',
      '/projects/krishivet-brand/krishivet-brand-11-social.jpg',
      '/projects/krishivet-brand/krishivet-brand-12-devices.jpg',
      '/projects/krishivet-brand/krishivet-brand-13-phones.jpg',
      '/projects/krishivet-brand/krishivet-brand-14-close.jpg',
    ],
    brand: {
      name: 'KrishiVet',
      summary: 'An earthy, trustworthy identity for a science-led animal nutrition brand. Deep espresso and forest green carry the credibility; soft mint adds warmth; harvest gold marks the details.',
      logo: '/projects/case-shots/krishivet-logo.png',
      logoCards: ['#F4F4F1', '#8ECDA8'],
      logoBg: '#1A1208',
      colors: [
        { name: 'Forest Green', hex: '#1E5C38', role: 'Primary buttons and key words' },
        { name: 'Mint', hex: '#8ECDA8', role: 'Highlights on dark sections' },
        { name: 'Espresso', hex: '#1A1208', role: 'Hero and dark sections' },
        { name: 'Bark', hex: '#2B1A0F', role: 'Footer' },
        { name: 'Harvest Gold', hex: '#C9961F', role: 'Labels and small accents' },
        { name: 'Stone', hex: '#4A4036', role: 'Body text' },
        { name: 'White', hex: '#FFFFFF', role: 'Main background' },
      ],
      font: {
        name: 'Manrope',
        note: 'One family across the site, set tight for headlines',
        weights: [400, 500, 600, 700],
        sample: ['Healthier animals.', 'Stronger livelihoods.'],
        sampleAccent: '#8ECDA8',
        body: 'Veterinary supplements formulated in Canada, tested on Bangladeshi farms and trusted by farmers who need results they can see.',
      },
      buttons: [
        { label: 'Explore products', bg: '#1E5C38', fg: '#FFFFFF' },
        { label: 'Contact us', bg: '#1A1208', fg: '#FFFFFF' },
        { label: 'Explore products', bg: '#1E5C38', fg: '#FFFFFF', onDark: true },
        { label: 'Talk to an expert', bg: 'transparent', fg: '#FFFFFF', border: 'rgba(255,255,255,0.4)', onDark: true },
      ],
      headlines: [
        ['Formulated in Canada.', 'Proven in Bangladesh.'],
        ['One mission,', 'held to four standards.'],
        ['Four products.', 'Real outcomes.'],
        ['From the lab bench', 'to your barn.'],
      ],
      headlineAccent: '#1E5C38',
      headlineNote: 'Every section opens with a two-part headline: a plain statement, then the payoff in the brand colour. It keeps the voice short, confident and easy to scan.',
    },
  },
  {
    slug: 'roboflight-brand',
    title: 'ROBOFLIGHT',
    tagline: "Brand identity and website for a kids’ robotics school in Fredericton",
    category: 'UI/UX',
    coverImage: '/projects/case-shots/roboflight-home.webp',
    year: '2024',
    tools: ['Figma', 'Next.js', 'Tailwind CSS', 'Adobe Illustrator'],
    role: 'Brand Designer & Web Developer',
    client: 'RoboFlight — Fredericton, New Brunswick',
    description: "RoboFlight is a STEM education program in New Brunswick that teaches robotics, drone building, coding and circuitry. I designed and developed its public website from scratch.",
    challenge: "The site had to feel credible to parents and educators while staying exciting for children. One visual system had to carry both moods.",
    approach: ["Set a night-navy and flight-blue palette that feels technical to parents and bright to kids.", "Wrote short, two-part headlines so every section can be understood at a glance.", "Designed an interactive Arduino build guide that shows what students actually make in class.", "Developed the site with Next.js and Tailwind CSS and deployed it on Vercel."],
    deliverables: ["Logo and colour palette", "Home page", "Programs section", "Arduino build guide", "Partner schools and testimonials", "Free-class booking and contact"],
    outcome: "A responsive website with one consistent brand system, live on Vercel, where parents can book a free trial class.",
    featured: true,
    liveUrl: 'https://roboflight.vercel.app',
    media: [
      { type: 'image', src: '/projects/case-shots/roboflight-home.webp', alt: "Roboflight \u2014 Home page on desktop, tablet and phone", caption: "Home page", description: "A night-navy hero with a real classroom photo, the class promise and two clear actions to explore programs or watch a class." },
      { type: 'image', src: '/projects/case-shots/roboflight-programs.webp', alt: "Roboflight \u2014 Programs on desktop, tablet and phone", caption: "Programs", description: "Three programs as cards, with the most popular one highlighted and the age range shown on every card." },
      { type: 'image', src: '/projects/case-shots/roboflight-arduino.webp', alt: "Roboflight \u2014 How a build works on desktop, tablet and phone", caption: "How a build works", description: "Four steps from gathering parts to racing the finished robot car, linked straight to the interactive builder." },
      { type: 'image', src: '/projects/case-shots/roboflight-build.webp', alt: "Roboflight \u2014 Interactive robot builder on desktop, tablet and phone", caption: "Interactive robot builder", description: "A browser-based builder where children drag real parts onto a board and wire up their own robot car." },
      { type: 'image', src: '/projects/case-shots/roboflight-book.webp', alt: "Roboflight \u2014 Book a free class on desktop, tablet and phone", caption: "Book a free class", description: "A short booking flow: choose a program, pick a day and time, and send the request in under a minute." },
    ],
    story: {
          "cover": "/projects/roboflight-brand/roboflight-brand-01-cover.jpg",
          "idea": {
                "src": "/projects/roboflight-brand/roboflight-brand-02-statement.jpg",
                "note": "Parents want proof their child is learning something real; kids want it to feel like play. The identity had to do both at once."
          },
          "identity": [
                {
                      "src": "/projects/roboflight-brand/roboflight-brand-03-logo.jpg",
                      "title": "The mark",
                      "note": "A pixel-built drone above a wide, technical wordmark. It reads instantly at any size, from a favicon to a classroom banner."
                },
                {
                      "src": "/projects/roboflight-brand/roboflight-brand-04-construction.jpg",
                      "title": "Built on a grid",
                      "note": "The symbol sits on a fixed 3.5 : 1 frame with generous clear space, so it always has room to breathe."
                },
                {
                      "src": "/projects/roboflight-brand/roboflight-brand-07-versions.jpg",
                      "title": "Works on every colour",
                      "note": "One-colour versions for navy, blue, cloud and amber backgrounds."
                },
                {
                      "src": "/projects/roboflight-brand/roboflight-brand-05-colour.jpg",
                      "title": "Night sky, flight blue",
                      "note": "Night Navy sets the engineering tone, Flight Blue drives action, and Drone Cyan and Amber add energy for kids."
                },
                {
                      "src": "/projects/roboflight-brand/roboflight-brand-06-type.jpg",
                      "title": "One typeface",
                      "note": "Manrope across the whole system: friendly, round shapes that still feel precise."
                }
          ],
          "websiteOpener": "/projects/roboflight-brand/roboflight-brand-12-devices.jpg",
          "world": [
                {
                      "src": "/projects/roboflight-brand/roboflight-brand-08-posters.jpg",
                      "title": "Posters"
                },
                {
                      "src": "/projects/roboflight-brand/roboflight-brand-10-social.jpg",
                      "title": "Social stickers"
                },
                {
                      "src": "/projects/roboflight-brand/roboflight-brand-09-cards.jpg",
                      "title": "Pilot licence card"
                },
                {
                      "src": "/projects/roboflight-brand/roboflight-brand-11-app.jpg",
                      "title": "On the phone"
                }
          ],
          "worldNote": "How the identity carries beyond the website. Posters, stickers and the licence card are concept applications.",
          "stats": [
                {
                      "value": 100,
                      "suffix": "+",
                      "label": "Students"
                },
                {
                      "value": 3,
                      "label": "Partner schools"
                },
                {
                      "value": 8,
                      "suffix": "+",
                      "label": "Starting age"
                }
          ],
          "closing": "/projects/roboflight-brand/roboflight-brand-13-close.jpg"
    },
    presentationNote: 'Logo, colour, type and voice applied across posters, social media, a student licence card and the website. Posters, social posts and the card are concept applications.',
    presentation: [
      '/projects/roboflight-brand/roboflight-brand-01-cover.jpg',
      '/projects/roboflight-brand/roboflight-brand-02-statement.jpg',
      '/projects/roboflight-brand/roboflight-brand-03-logo.jpg',
      '/projects/roboflight-brand/roboflight-brand-04-construction.jpg',
      '/projects/roboflight-brand/roboflight-brand-05-colour.jpg',
      '/projects/roboflight-brand/roboflight-brand-06-type.jpg',
      '/projects/roboflight-brand/roboflight-brand-07-versions.jpg',
      '/projects/roboflight-brand/roboflight-brand-08-posters.jpg',
      '/projects/roboflight-brand/roboflight-brand-09-cards.jpg',
      '/projects/roboflight-brand/roboflight-brand-10-social.jpg',
      '/projects/roboflight-brand/roboflight-brand-11-app.jpg',
      '/projects/roboflight-brand/roboflight-brand-12-devices.jpg',
      '/projects/roboflight-brand/roboflight-brand-13-close.jpg',
    ],
    brand: {
      name: 'RoboFlight',
      summary: 'A bright, technical identity for a kids’ robotics and coding school. Night navy sets the engineering tone, flight blue drives action, and sky blue adds the energy that keeps it fun for children.',
      logo: '/projects/case-shots/roboflight-logo.png',
      logoCards: ['#0A1530', '#2563EB'],
      logoBg: '#0A1530',
      colors: [
        { name: 'Night Navy', hex: '#0A1530', role: 'Hero and dark sections' },
        { name: 'Flight Blue', hex: '#2563EB', role: 'Primary buttons and key words' },
        { name: 'Sky', hex: '#38BDF8', role: 'Highlights on dark sections' },
        { name: 'Slate', hex: '#0F172A', role: 'Headings' },
        { name: 'Steel', hex: '#334155', role: 'Body text' },
        { name: 'Amber', hex: '#FBBF24', role: 'Badges and small accents' },
        { name: 'Cloud', hex: '#F8FAFC', role: 'Alternate sections' },
        { name: 'White', hex: '#FFFFFF', role: 'Main background' },
      ],
      font: {
        name: 'Manrope',
        note: 'Friendly geometric shapes that still feel technical',
        weights: [400, 500, 600, 700],
        sample: ['Build it. Code it.', 'Watch it take flight.'],
        sampleAccent: '#38BDF8',
        body: 'Hands-on robotics, coding, drone and RC plane classes for kids in Fredericton. Small groups, and every kit is included.',
      },
      buttons: [
        { label: 'Book a free class', bg: '#2563EB', fg: '#FFFFFF' },
        { label: 'See programs', bg: '#FFFFFF', fg: '#0F172A', border: '#CBD5E1' },
        { label: 'Book a free class', bg: '#2563EB', fg: '#FFFFFF', onDark: true },
        { label: 'Programs', bg: 'transparent', fg: '#FFFFFF', border: 'rgba(255,255,255,0.35)', onDark: true },
      ],
      headlines: [
        ['Build it. Code it.', 'Watch it take flight.'],
        ['Real kits. Real code.', 'Real robots.'],
        ['Three ways', 'to take flight.'],
        ['From first wire', 'to first drive.'],
      ],
      headlineAccent: '#2563EB',
      headlineNote: 'Short, rhythmic headlines with the last phrase in flight blue. The pattern repeats on every section, so the page reads like one story from first visit to enrolment.',
    },
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
    tagline: "Posters, banners and print for the Bangladesh Student Society at UNB",
    category: 'Branding',
    coverImage: '/projects/bss/fall.jpg',
    year: '2023',
    tools: ['Adobe Photoshop', 'Adobe Illustrator'],
    role: 'Graphic Designer',
    client: 'Bangladesh Student Society, UNB',
    description: "Event visuals for the Bangladesh Student Society at the University of New Brunswick, covering Fall Orientation 2023, winter registration, print banners and social media posts.",
    challenge: "The designs had to carry cultural warmth and seasonal themes while staying clean and suitable for a university setting, across formats from square posts to large print banners.",
    approach: ["Designed the main Fall Orientation poster and adapted it into a wide banner.", "Created deadline and extension announcements that are easy to read at a glance.", "Kept one visual language across digital posts and printed material."],
    deliverables: ["Fall Orientation poster and banner", "Registration deadline posts", "Winter registration post", "Welcome banner", "Print materials"],
    outcome: "A multi-format campaign the society used across digital channels and print.",
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
  bio: 'Designer and Computer Science student at the University of New Brunswick. I create brand identities, interfaces and motion work for businesses and organisations in Canada and Bangladesh.',
  behance: 'https://www.behance.net/kazimostofasakin',
  devPortfolio: 'https://www.kazimostofasakin.com/',  // your live dev portfolio URL
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
