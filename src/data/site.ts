export type NavItem = {
  label: string
  href: string
}

export type InterestItem = {
  title: string
  description: string
}

export type ExperienceItem = {
  period: string
  role: string
  organization: string
  summary: string
}

export type ProjectItemData = {
  year: string
  category: string
  title: string
  summary: string
}

export type WorkItem = {
  type: string
  title: string
  summary: string
  href: string
}

export type WritingItem = {
  date: string
  category: string
  title: string
  summary: string
  href: string
}

export type StatItem = {
  value: string
  label: string
}

export type ContactLink = {
  label: string
  href: string
}

export const siteData = {
  personal: {
    name: 'Your Name',
    initials: 'YN',
    title: 'Researcher · Writer · Builder',
  },
  navigation: [
    { label: 'About', href: '#about' },
    { label: 'Experience', href: '#experience' },
    { label: 'Projects', href: '#projects' },
    { label: 'Works', href: '#works' },
    { label: 'Contact', href: '#contact' },
  ] as NavItem[],
  hero: {
    eyebrow: 'Editorial Portfolio',
    title: 'Research, writing, and ideas at the intersection of business, governance, and innovation.',
    subtitle:
      'I study how institutions, incentives, and corporate decisions shape long-term value creation.',
    primaryCta: { label: 'View Work', href: '#works' },
    secondaryCta: { label: 'Download CV', href: '/cv.pdf' },
  },
  about: {
    heading: 'A long view on institutions, strategy, and stewardship.',
    paragraphs: [
      'My work focuses on how organizations make consequential decisions under uncertainty, especially when incentives, governance, and public expectations are misaligned. I am interested in the architecture of durable institutions and the craft of strategic judgment.',
      'Across research and applied projects, I aim to connect rigorous analysis with practical clarity. Outside formal work, I keep field notes through photography, reading, and slow urban walks that sharpen observation and broaden perspective.',
    ],
  },
  interests: [
    {
      title: 'Photography',
      description:
        'Documentary-style images of architecture, streetscapes, and quiet details that often escape first glance.',
    },
    {
      title: 'Reading',
      description:
        'Essays, institutional history, and political economy literature that informs both methods and imagination.',
    },
    {
      title: 'Walking',
      description:
        'Long walks as a deliberate thinking practice for testing arguments, structure, and narrative pacing.',
    },
    {
      title: 'Archival Notes',
      description: 'A private commonplace of observations, references, and sketches for future writing and projects.',
    },
  ] as InterestItem[],
  experience: [
    {
      period: '2024 - Present',
      role: 'Independent Research Fellow',
      organization: 'Policy & Corporate Governance Initiative',
      summary:
        'Leading comparative research on institutional incentives and board-level decision quality in high-volatility sectors.',
    },
    {
      period: '2021 - 2024',
      role: 'Strategy Analyst',
      organization: 'Public Interest Capital Lab',
      summary:
        'Designed evidence frameworks linking corporate strategy choices to long-term social and financial outcomes.',
    },
    {
      period: '2018 - 2021',
      role: 'Research Associate',
      organization: 'Center for Institutional Design',
      summary:
        'Contributed to mixed-method studies on regulatory architecture, market behavior, and organizational adaptation.',
    },
  ] as ExperienceItem[],
  projects: [
    {
      year: '2026',
      category: 'Governance',
      title: 'Institutional Incentives and Strategic Time Horizons',
      summary:
        'A working paper examining how governance structures influence long-term investment discipline during policy volatility.',
    },
    {
      year: '2025',
      category: 'Corporate Strategy',
      title: 'Decision Quality Under Regulatory Uncertainty',
      summary:
        'Field interviews and document analysis on how executive teams recalibrate strategy when regulatory narratives shift.',
    },
    {
      year: '2024',
      category: 'Innovation Policy',
      title: 'Innovation Systems and Coordination Failures',
      summary:
        'A cross-sector study mapping where institutional frictions delay promising innovation pathways.',
    },
  ] as ProjectItemData[],
  works: [
    {
      type: 'Photography Series',
      title: 'Libraries, Light, and Public Space',
      summary:
        'A visual essay on civic interiors and the spatial language of concentration, access, and memory.',
      href: '#',
    },
    {
      type: 'Research Report',
      title: 'Stewardship in Transitional Markets',
      summary:
        'An editorial report distilling evidence on board stewardship in fast-changing policy and investment environments.',
      href: '#',
    },
    {
      type: 'Policy Brief',
      title: 'Capital Allocation and Institutional Trust',
      summary:
        'A concise brief proposing practical metrics for evaluating strategic credibility in long-cycle industries.',
      href: '#',
    },
  ] as WorkItem[],
  writing: [
    {
      date: 'Mar 2026',
      category: 'Essay',
      title: 'On Institutional Patience in a Quarterly World',
      summary:
        'A reflection on why durable value creation often depends on decisions that appear inefficient in the short run.',
      href: '#',
    },
    {
      date: 'Dec 2025',
      category: 'Notes',
      title: 'What Makes Strategy Legible Across Stakeholders',
      summary:
        'Field notes on communication design, credibility signals, and the narrative burden of strategic leadership.',
      href: '#',
    },
    {
      date: 'Sep 2025',
      category: 'Research Memo',
      title: 'The Quiet Mechanics of Boardroom Learning',
      summary:
        'An analysis of how governance teams update priors, absorb dissent, and decide under incomplete information.',
      href: '#',
    },
  ] as WritingItem[],
  stats: [
    { value: '5+', label: 'Research Topics' },
    { value: '10+', label: 'Working Papers' },
    { value: '3', label: 'Fields of Interest' },
    { value: '1', label: 'Long-term Academic Vision' },
  ] as StatItem[],
  contact: {
    heading: 'Let’s start a thoughtful conversation.',
    body: 'I welcome collaborations across research, strategy, and writing. If you are building something rigorous and meaningful, I would be glad to hear from you.',
    email: 'hello@yourname.com',
    links: [
      { label: 'GitHub', href: 'https://github.com/yourname' },
      { label: 'LinkedIn', href: 'https://www.linkedin.com/in/yourname' },
      { label: 'Google Scholar', href: 'https://scholar.google.com/' },
    ] as ContactLink[],
  },
  footer: {
    note: 'Built with care in React, TypeScript, and Tailwind CSS.',
  },
}

