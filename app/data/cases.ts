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
  logo: { src: string; darkBg: string; lightBg: string; invertOnDark: boolean; darkenOnLight: boolean; note: string };
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
    intro: 'An identity and a multi-page website for an animal nutrition brand that brings Canadian-formulated supplements to farmers in Bangladesh.',
    challenge: 'KrishiVet sits between two worlds: Canadian lab science and Bangladeshi farms. The brand had to earn the trust of farmers who are wary of new products, explain the science in plain language, and work on the phones most of them use.',
    idea: 'Pair the credibility of science with the warmth of the farm. Deep espresso and forest green carry the trust, real photography of farmers and their animals carries the warmth, and every headline is short enough to read at a glance.',
    approach: [
      'Planned the site around the questions farmers actually ask: what the products do, why they can be trusted and how to order.',
      'Designed a logo that joins a cow and a leaf above a confident wordmark, with fixed proportions for labels, signs and screens.',
      'Set a two-part headline system: a plain statement, then the payoff in green.',
      'Built the site with Next.js and Tailwind CSS, fully responsive from phone to desktop.',
    ],
    logo: {
      src: '/brand/krishivet-logo.png',
      darkBg: '#1E5C38',
      lightBg: '#F6F2EA',
      invertOnDark: true,
      darkenOnLight: false,
      note: 'A cow and leaf in leaf green above the wordmark: farming and nature in one symbol.',
    },
    palette: [
      { name: 'Espresso', hex: '#1A1208', dark: true },
      { name: 'Forest Green', hex: '#1E5C38', dark: true },
      { name: 'Mint', hex: '#8ECDA8' },
      { name: 'Harvest Gold', hex: '#C9961F' },
      { name: 'Paper', hex: '#F6F2EA' },
    ],
    paletteNote: 'Espresso and forest green carry trust. Mint and harvest gold add warmth. Paper keeps everything light.',
    type: { family: 'Manrope', sample: ['Healthier animals.', 'Stronger livelihoods.'], accent: '#1E5C38', note: 'One family across print and screen, set tight for headlines and open for body text.' },
    hero: '/mockups/photo/kv-laptop.webp',
    laptop: '/mockups/photo/kv-laptop2.webp',
    devices: [
      { src: '/mockups/photo/kv-tablet.webp', alt: 'KrishiVet product range on a tablet on a wooden desk', caption: 'Product range on a tablet', ratio: '4 / 5' },
      { src: '/mockups/photo/kv-phone.webp', alt: 'KrishiVet home page on a phone held outdoors', caption: 'The home page on a phone, where most farmers visit', ratio: '4 / 5' },
    ],
    chapters: [
      {
        title: 'In print and in the field',
        text: 'The identity applied to outdoor advertising, shop bags, stationery and posters. These are concept applications of the system.',
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
      { src: '/screens/krishivet-home.webp', mobile: '/screens/krishivet-home-m.webp', title: 'Home page', text: 'A full-bleed farm photo and a two-part headline introduce the brand in one line, with one clear action.' },
      { src: '/screens/krishivet-products-section.webp', mobile: '/screens/krishivet-products-section-m.webp', title: 'Product range', text: 'Four formulations as photo cards, so farmers can compare products at a glance.' },
      { src: '/screens/krishivet-process.webp', mobile: '/screens/krishivet-process-m.webp', title: 'Our process', text: 'Research, formulation, field trials and quality release as four numbered steps.' },
      { src: '/screens/krishivet-why.webp', mobile: '/screens/krishivet-why-m.webp', title: 'Why KrishiVet', text: 'Proof first: farms served, reorder rate and the scientists behind each product.' },
    ],
    stats: [
      { value: '500+', label: 'Farms served' },
      { value: '98%', label: 'Reorder rate' },
      { value: '4', label: 'Formulations' },
    ],
    outcome: 'A complete identity and a multi-page website, live at krishivet.ca. The print and merchandise pieces shown here are concept applications of the same system.',
    tint: '#F3EFE7',
  },

  'roboflight-brand': {
    slug: 'roboflight-brand',
    name: 'RoboFlight',
    kind: 'Brand identity and website',
    year: '2024',
    client: 'RoboFlight, Fredericton',
    role: 'Brand designer and web developer',
    services: ['Logo and identity', 'Colour and type system', 'Website design', 'Development'],
    liveUrl: 'https://roboflight.vercel.app',
    liveLabel: 'roboflight.vercel.app',
    intro: 'An identity and a public website for a STEM program in New Brunswick that teaches children robotics, drone building, coding and circuitry.',
    challenge: 'Parents want proof that their child is learning something real. Children want it to feel like play. One visual system had to feel credible to parents and educators while staying exciting for kids.',
    idea: 'Kids learn faster when they build it themselves. A pixel-built drone, a night-navy and flight-blue palette that feels technical to adults and bright to children, and photography of real students at work.',
    approach: [
      'Drew a pixel-built drone above a wide, technical wordmark that reads at any size, from a favicon to a classroom banner.',
      'Set night navy for the engineering tone, flight blue for action, and sky and amber for energy.',
      'Designed an interactive build guide that shows what students actually make in class.',
      'Developed the site with Next.js and Tailwind CSS and deployed it on Vercel, with a short free-class booking flow.',
    ],
    logo: {
      src: '/brand/roboflight-lockup.png',
      darkBg: '#0A1530',
      lightBg: '#EEF2F7',
      invertOnDark: false,
      darkenOnLight: true,
      note: 'A pixel-built drone above a wide, technical wordmark. It reads instantly at any size.',
    },
    palette: [
      { name: 'Night Navy', hex: '#0A1530', dark: true },
      { name: 'Flight Blue', hex: '#2563EB', dark: true },
      { name: 'Sky', hex: '#38BDF8' },
      { name: 'Amber', hex: '#FBBF24' },
      { name: 'Cloud', hex: '#F8FAFC' },
    ],
    paletteNote: 'Night navy sets the engineering tone, flight blue drives action, and sky and amber add energy for kids.',
    type: { family: 'Manrope', sample: ['Robotics, coding', '& circuitry.'], accent: '#2563EB', note: 'Friendly, rounded shapes that still feel precise. One family across the whole system.' },
    hero: '/mockups/photo/rf-laptop.webp',
    laptop: '/mockups/photo/rf-laptop2.webp',
    devices: [
      { src: '/mockups/photo/rf-tablet.webp', alt: 'RoboFlight build guide on a tablet in use', caption: 'The build guide on a classroom tablet', ratio: '16 / 9' },
      { src: '/mockups/photo/rf-phone.webp', alt: 'RoboFlight booking page on a phone', caption: 'Booking a free class on a phone', ratio: '16 / 9' },
    ],
    chapters: [
      {
        title: 'In the classroom',
        text: 'The kit students take home, the guide they follow and what they wear and see around the program. These are concept applications.',
        rows: [
          [{ src: '/mockups/photo/rf-box.webp', alt: 'RoboFlight Robot Car Kit box printed on kraft card', caption: 'Robot Car Kit box', ratio: '3 / 2' }],
          [
            { src: '/mockups/photo/rf-notebook.webp', alt: 'RoboFlight student build guide on a wooden desk', caption: 'Student build guide', ratio: '3 / 2' },
            { src: '/mockups/photo/rf-sign.webp', alt: 'RoboFlight sidewalk sign for a free class', caption: 'Sidewalk sign for open days', ratio: '3 / 2' },
          ],
          [
            { src: '/mockups/photo/rf-tshirt.webp', alt: 'RoboFlight t-shirt', caption: 'Club t-shirt', ratio: '4 / 5' },
            { src: '/mockups/photo/rf-cards.webp', alt: 'RoboFlight business card on a stack', caption: 'Business cards', ratio: '4 / 5' },
          ],
          [{ src: '/mockups/photo/rf-poster.webp', alt: 'RoboFlight poster in a black frame on a dresser', caption: 'Poster, framed', ratio: '3 / 2' }],
        ],
      },
    ],
    screens: [
      { src: '/screens/roboflight-home.webp', mobile: '/screens/roboflight-home-m.webp', title: 'Home page', text: 'A night-navy hero with a real classroom photo, the class promise and two clear actions.' },
      { src: '/screens/roboflight-programs.webp', mobile: '/screens/roboflight-programs-m.webp', title: 'Programs', text: 'Three programs as cards, with the most popular one highlighted and the age range on each.' },
      { src: '/screens/roboflight-build.webp', mobile: '/screens/roboflight-build-m.webp', title: 'Interactive robot builder', text: 'Children drag real parts onto a board and wire up their own robot car in the browser.' },
      { src: '/screens/roboflight-book.webp', mobile: '/screens/roboflight-book-m.webp', title: 'Book a free class', text: 'Choose a program, pick a day and time, and send the request in under a minute.' },
    ],
    stats: [
      { value: '100+', label: 'Students' },
      { value: '3', label: 'Partner schools' },
      { value: '8+', label: 'Starting age' },
    ],
    outcome: 'A responsive website with one consistent brand system, where parents can book a free trial class. The print and merchandise pieces shown here are concept applications of the same system.',
    tint: '#EEF2F7',
  },
};
