export const projects = [
  { id: 'orbit', name: 'Orbit', category: 'ANALYTICS PLATFORM', description: 'Making complex product data feel simple. A focused analytics workspace for teams that move fast.', tags: ['Next.js', 'TypeScript', 'Recharts'], art: 'orbit', detail: 'Designed an accessible dashboard with keyboard-friendly filters, responsive data summaries, and a reusable chart system.' },
  { id: 'forma', name: 'Forma', category: 'DESIGN SYSTEM', description: 'One shared language, endless possibilities. A considered foundation for building consistent products.', tags: ['React', 'Storybook', 'CSS'], art: 'forma', detail: 'Explored semantic design tokens, accessible component states, and documentation that connects design decisions to implementation.' },
  { id: 'terrain', name: 'Terrain', category: 'TRAVEL EXPERIENCE', description: 'A little less scrolling. A little more exploring. An editorial approach to finding your next escape.', tags: ['Next.js', 'Tailwind CSS', 'Map UI'], art: 'terrain', detail: 'Built a responsive destination discovery concept with locally drawn landscapes, clear information hierarchy, and low-motion interactions.' },
  { id: 'linear-notes', name: 'Margin', category: 'PRODUCTIVITY TOOL', description: 'Room for your next good idea. A calm, distraction-free space where thoughts turn into something.', tags: ['React', 'TypeScript', 'Local-first'], art: 'margin', detail: 'Prototyped a keyboard-first writing workspace with a restrained layout, predictable focus behavior, and clear document navigation.' },
] as const;

export const experience = [
  { period: '2023 — NOW', role: 'Senior Frontend Developer', company: 'Layer Studio', text: 'Leading frontend architecture for thoughtful digital products. Partnering with designers and mentoring a small, ambitious engineering team.' },
  { period: '2020 — 2023', role: 'Frontend Developer', company: 'Northstar Digital', text: 'Built fast, accessible web experiences for growing teams. Helped turn a collection of interfaces into a cohesive design system.' },
  { period: '2018 — 2020', role: 'UI Developer', company: 'Made Together', text: 'Brought brand identities to life on the web, with a focus on responsive layouts, interaction details, and maintainable code.' },
];

export const email = 'alex.morgan@example.com';
if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) throw new Error('Invalid contact email');
export const contactHref = `mailto:${email}?subject=${encodeURIComponent('Let’s build something together')}`;
