// Curated content for the two brand case studies. Images are realistic mockups
// rendered from the real websites and the brand artwork.

export interface Screen { src: string; mobile: string; title: string; text: string }
export interface Shot { src: string; alt: string; caption: string; ratio?: string }
export interface Chapter { title: string; text: string; rows: Shot[][] }

export interface CaseStudy {
  slug: string;
  name: string;
  kind: string;
  year: string;
  client: string;
  role: string;
  services: string[];
  liveUrl: string;
  liveLabel: string;
  intro: string;
  challenge: string;
  idea: string;
  approach: string[];
  logo: { src: string; lightSrc?: string; width?: string; darkBg: string; lightBg: string; invertOnDark: boolean; darkenOnLight: boolean; note: string };
  palette: { name: string; hex: string; dark?: boolean }[];
  paletteNote: string;
  type: { family: string; sample: [string, string]; accent: string; note: string };
  hero: string;
  laptop: string;
  devices: [Shot, Shot];
  chapters: Chapter[];
  screens: Screen[];
  stats: { value: string; label: string }[];
  outcome: string;
  tint: string; // soft background used behind logo and type panels
}

export const cases: Record<string, CaseStudy> = {
  krishivet: {
    slug: 'krishivet',
    name: 'KrishiVet',
    kind: 'Brand identity and website',
    year: '2025',
    client: 'KrishiVet Nutra Solution',
    role: 'Brand designer and web developer',
    services: ['Logo and identity', 'Colour and type system', 'Website design', 'Development'],
    liveUrl: 'https://krishivet.ca',
    liveLabel: 'krishivet.ca',
    intro: 'Brand identity and website for KrishiVet, a Canadian animal nutrition company supplying farmers in Bangladesh.',
    challenge: 'Farmers in Bangladesh are cautious about new products. The brand had to build trust, explain the science simply and work well on mobile.',
    idea: 'Forest green and espresso give the brand a steady, credible tone. Farm photography and short headlines keep it approachable.',
    approach: [
      'Structured the site around what the products do, why they work and how to order.',
      'Designed a logo combining a cow and a leaf with the wordmark.',
      'Set a two-line headline style, with the second line in green.',
      'Built the site in Next.js and Tailwind CSS, responsive across devices.',
    ],
    logo: {
      src: '/brand/krishivet-logo.png',
      darkBg: '#1E5C38',
      lightBg: '#F6F2EA',
      invertOnDark: true,
      darkenOnLight: false,
      note: 'A cow and leaf mark above the wordmark.',
    },
    palette: [
      { name: 'Espresso', hex: '#1A1208', dark: true },
      { name: 'Forest Green', hex: '#1E5C38', dark: true },
      { name: 'Mint', hex: '#8ECDA8' },
      { name: 'Harvest Gold', hex: '#C9961F' },
      { name: 'Paper', hex: '#F6F2EA' },
    ],
    paletteNote: 'Espresso and forest green for structure, mint and harvest gold for accents, paper as the base.',
    type: { family: 'Manrope', sample: ['Healthier animals.', 'Stronger livelihoods.'], accent: '#1E5C38', note: 'Manrope for print and screen.' },
    hero: '/mockups/photo/kv-laptop.webp',
    laptop: '/mockups/photo/kv-laptop2.webp',
    devices: [
      { src: '/mockups/photo/kv-tablet.webp', alt: 'KrishiVet product range on a tablet on a wooden desk', caption: 'Product range on tablet', ratio: '4 / 5' },
      { src: '/mockups/photo/kv-phone.webp', alt: 'KrishiVet home page on a phone held outdoors', caption: 'Home page on mobile', ratio: '4 / 5' },
    ],
    chapters: [
      {
        title: 'In print and in the field',
        text: 'Concept applications of the identity for advertising, retail and stationery.',
        rows: [
          [{ src: '/mockups/photo/kv-billboard.webp', alt: 'KrishiVet billboard against the sky', caption: 'Roadside billboard', ratio: '3 / 2' }],
          [
            { src: '/mockups/photo/kv-bag.webp', alt: 'KrishiVet logo printed on a kraft paper bag', caption: 'Kraft bag for farm shops', ratio: '4 / 5' },
            { src: '/mockups/photo/kv-tote.webp', alt: 'KrishiVet cotton tote bag hanging on a door', caption: 'Cotton tote', ratio: '4 / 5' },
          ],
          [{ src: '/mockups/photo/kv-cards.webp', alt: 'KrishiVet business cards, front and back', caption: 'Business cards, front and back', ratio: '3 / 2' }],
          [{ src: '/mockups/photo/kv-poster2.webp', alt: 'KrishiVet product poster in a white frame', caption: 'Product poster, framed', ratio: '3 / 2' }],
        ],
      },
    ],
    screens: [
      { src: '/screens/krishivet-home.webp', mobile: '/screens/krishivet-home-m.webp', title: 'Home page', text: 'Farm photo, brand headline and one main action.' },
      { src: '/screens/krishivet-products-section.webp', mobile: '/screens/krishivet-products-section-m.webp', title: 'Product range', text: 'The four formulations as photo cards.' },
      { src: '/screens/krishivet-process.webp', mobile: '/screens/krishivet-process-m.webp', title: 'Our process', text: 'From research to quality release in four steps.' },
      { src: '/screens/krishivet-why.webp', mobile: '/screens/krishivet-why-m.webp', title: 'Why KrishiVet', text: 'Results and the scientists behind the products.' },
    ],
    stats: [
      { value: '500+', label: 'Farms served' },
      { value: '98%', label: 'Reorder rate' },
      { value: '4', label: 'Formulations' },
    ],
    outcome: 'The identity and website are live at krishivet.ca. Print and merchandise shown here are concept work.',
    tint: '#F3EFE7',
  },

  'roboflight-brand': {
    slug: 'roboflight-brand',
    name: 'RoboFlight',
    kind: 'Brand identity and website',
    year: '2026',
    client: 'RoboFlight, Fredericton',
    role: 'Brand designer and web developer',
    services: ['Logo and identity', 'Colour and type system', 'Website design', 'Development'],
    liveUrl: 'https://roboflight.ca',
    liveLabel: 'roboflight.ca',
    intro: 'Brand refresh and website for RoboFlight, a Fredericton STEM school that teaches drone, robotics and RC plane building to students in Grades 3 to 10 and adults.',
    challenge: 'RoboFlight needed one site for three audiences: parents, schools and students. It had to explain three courses clearly and make booking a free class simple.',
    idea: 'The site leads with what students make. Navy and blue set a technical tone, amber marks each call to action, and photos from real classes show the work.',
    approach: [
      'Redrew the logo as a horizontal lockup that works in the navigation bar and at small sizes.',
      'Gave each course its own page with skills, age range and a booking link.',
      'Added a page for schools with partner logos and a principal\'s testimonial.',
      'Built the site in Next.js and Tailwind CSS with a three-step booking form.',
    ],
    logo: {
      src: '/brand/roboflight-lockup-white.png',
      lightSrc: '/brand/roboflight-lockup-dark.png',
      width: '64%',
      darkBg: '#0A1530',
      lightBg: '#EEF2F7',
      invertOnDark: false,
      darkenOnLight: false,
      note: 'Pixel drone mark with the RoboFlight wordmark and tagline.',
    },
    palette: [
      { name: 'Night Navy', hex: '#0A1530', dark: true },
      { name: 'Flight Blue', hex: '#2563EB', dark: true },
      { name: 'Sky', hex: '#38BDF8' },
      { name: 'Amber', hex: '#FBBF24' },
      { name: 'Cloud', hex: '#F8FAFC' },
    ],
    paletteNote: 'Navy and blue for structure, sky for the mark and amber for calls to action.',
    type: { family: 'Manrope', sample: ['Build robots.', 'Fly drones.'], accent: '#2563EB', note: 'Manrope for all text. Headlines are set bold, with the second line in colour.' },
    hero: '/mockups/photo/rf-laptop.webp',
    laptop: '/mockups/photo/rf-laptop2.webp',
    devices: [
      { src: '/mockups/photo/rf-tablet.webp', alt: 'RoboFlight courses section on a tablet in use', caption: 'Courses section on tablet', ratio: '16 / 9' },
      { src: '/mockups/photo/rf-phone.webp', alt: 'RoboFlight home page on a phone', caption: 'Home page on mobile', ratio: '16 / 9' },
    ],
    chapters: [
      {
        title: 'In the classroom',
        text: 'Concept applications of the identity for kits, course material and events.',
        rows: [
          [{ src: '/mockups/photo/rf-box.webp', alt: 'RoboFlight quadcopter kit box printed on kraft card', caption: 'Quadcopter kit box', ratio: '3 / 2' }],
          [
            { src: '/mockups/photo/rf-notebook.webp', alt: 'RoboFlight student guide for the Quadcopter Drone course', caption: 'Quadcopter Drone student guide', ratio: '3 / 2' },
            { src: '/mockups/photo/rf-sign.webp', alt: 'RoboFlight sidewalk sign for a free trial class', caption: 'Sidewalk sign', ratio: '3 / 2' },
          ],
          [
            { src: '/mockups/photo/rf-tshirt.webp', alt: 'RoboFlight t-shirt', caption: 'T-shirt', ratio: '4 / 5' },
            { src: '/mockups/photo/rf-cards.webp', alt: 'RoboFlight business card on a stack', caption: 'Business cards', ratio: '4 / 5' },
          ],
          [{ src: '/mockups/photo/rf-poster.webp', alt: 'RoboFlight poster in a black frame on a dresser', caption: 'Poster', ratio: '3 / 2' }],
        ],
      },
    ],
    screens: [
      { src: '/screens/roboflight-home.webp', mobile: '/screens/roboflight-home-m.webp', title: 'Home page', text: 'Headline, classroom photo and the two main actions.' },
      { src: '/screens/roboflight-courses.webp', mobile: '/screens/roboflight-home-m.webp', title: 'Courses', text: 'The three courses and the skills each one covers.' },
      { src: '/screens/roboflight-teach.webp', mobile: '/screens/roboflight-home-m.webp', title: 'How we teach', text: 'The teaching method in three steps.' },
      { src: '/screens/roboflight-book.webp', mobile: '/screens/roboflight-book-m.webp', title: 'Book a free class', text: 'A three-step booking form. No payment is required.' },
      { src: '/screens/roboflight-schools.webp', mobile: '/screens/roboflight-home-m.webp', title: 'For schools', text: 'Program details for principals and teachers.' },
      { src: '/screens/roboflight-partners.webp', mobile: '/screens/roboflight-home-m.webp', title: 'Partner schools', text: 'Eight partner schools across New Brunswick.' },
    ],
    stats: [
      { value: '209+', label: 'Students trained' },
      { value: '12+', label: 'Schools across New Brunswick' },
      { value: '3', label: 'Courses' },
    ],
    outcome: 'The site launched at roboflight.ca in 2026. Print and merchandise shown here are concept work.',
    tint: '#EEF2F7',
  },
};
