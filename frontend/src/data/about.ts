import { siteConfig } from '../config/site'

export interface AboutTimelineItem {
  period: string
  organization: string
  role: string
  description: string
  emphasis?: boolean
}
export interface AboutData {
  title: string
  subtitle: string
  introduction: string
  profile: string
  skills: Record<string, string[]>
  experience: AboutTimelineItem[]
  education: AboutTimelineItem[]
  languages: Array<{ name: string; level: string }>
  interests: string[]
  links: Array<{ label: string; url: string; external?: boolean }>
}

export const aboutData: AboutData = {
  title: 'Duuk van den Bosch',
  subtitle: 'HBO-ICT Student | Software Engineer',
  introduction:
    'I am a third-year HBO-ICT student at the Hogeschool van Amsterdam and an aspiring software engineer. I enjoy understanding problems, building useful applications, and learning continuously through practice.',
  profile:
    'I completed my first-year propedeuse and previously finished an accelerated MBO 4 Software Developer programme at Nova College in Haarlem. My interests include software development, technology, problem-solving, and the decisions that make software easier to maintain.',
  skills: {
    'Languages & web': ['Java', 'PHP', 'TypeScript', 'JavaScript', 'HTML & CSS', 'C#', 'SQL'],
    'Frameworks & practice': ['Vue.js', 'Laravel', 'Git', 'Object-oriented programming'],
  },
  experience: [
    {
      period: 'Apr 2026 — Aug 2026',
      organization: 'Amsterdam Police — Digital Investigation Team',
      role: 'Software Engineering Intern',
      description:
        'Contributed to an internal application using PHP, Vue.js, Laravel, and SQL while collaborating with developers and police users. Confidential system details are intentionally omitted.',
      emphasis: true,
    },
    {
      period: 'Nov 2023 — Mar 2024',
      organization: 'Novagraaf Amsterdam',
      role: 'Software Developer Intern',
      description: 'Worked with PHP, HTML, CSS, SQL, and JavaScript as part of a development team on company projects.',
      emphasis: true,
    },
    {
      period: 'Apr 2024 — present',
      organization: 'IKEA Haarlem',
      role: 'Home Delivery Driver',
      description:
        'A customer-facing role requiring responsibility, clear communication, planning, and time management.',
    },
  ],
  education: [
    {
      period: '2024 — present',
      organization: 'Hogeschool van Amsterdam',
      role: 'HBO-ICT · Third year',
      description: 'Currently studying HBO-ICT and successfully completed my first-year propedeuse.',
      emphasis: true,
    },
    {
      period: '2022 — 2024',
      organization: 'Nova College, Haarlem',
      role: 'Software Developer MBO 4',
      description:
        'Completed an accelerated programme covering software development, programming, and application design.',
      emphasis: true,
    },
    { period: '2018 — 2022', organization: 'Vellesan', role: 'MAVO', description: 'Completed secondary education.' },
  ],
  languages: [
    { name: 'Dutch', level: 'Native' },
    { name: 'English', level: 'B2' },
    { name: 'Japanese', level: 'N5' },
  ],
  interests: ['Hockey', 'Fitness & gym', 'Technology', 'Travelling'],
  links: [
    { label: 'Email', url: `mailto:${siteConfig.email}` },
    { label: 'LinkedIn', url: siteConfig.linkedinUrl, external: true },
    { label: 'GitHub', url: siteConfig.githubUrl, external: true },
    { label: 'GitLab', url: siteConfig.gitlabUrl, external: true },
  ],
}
