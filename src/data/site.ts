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

export type WorkPhotoItem = {
  title: string
  description: string
  image: string
  alt: string
}

export type WorkDocumentItem = {
  title: string
  year: string
  description: string
  image: string
  alt: string
  link: string
}

export type WorksData = {
  gallery: WorkPhotoItem[]
  reports: WorkDocumentItem[]
  presentations: WorkDocumentItem[]
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
    name: '赵琪',
    initials: 'ZQ',
    title: 'Student ·  Builder',
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
    title: '一个相当简单的我',
    subtitle:
      '保持热爱，充盈生活',
    primaryCta: { label: 'View Work', href: '#works' },
    secondaryCta: { label: 'Download CV', href: '/cv.pdf' },
  },
  about: {
    heading: '正在读研究生的我',
    paragraphs: [
      '此人正在南开大学读研，同时在一家咨询公司线上实习，正在疯狂思考未来的生活方式和成长目标。',
      '希望能够不断成长，保持好奇心，拥有生活，实现成就。',
    ],
  },
  interests: [
    {
      title: '拍照',
      description:
        '拍自己，拍别人，拍动物，拍风景。',
    },
    {
      title: '读书',
      description:
        '杂七杂八什么都读，社会学、心理学、经济学、小说、历史、哲学、网络小说……',
    },
    {
      title: '散步',
      description:
        '喜欢到处走走逛逛，呼吸新鲜空气。',
    },
    {
      title: 'Archival Notes',
      description: 'A private commonplace of observations, references, and sketches for future writing and projects.',
    },
  ] as InterestItem[],
  experience: [
    {
      period: '2025.9 - Present',
      role: '南开大学',
      organization: '读研了',
      summary:
        '新角色开始，感觉读研堪比上班，需要有超好的心态面对鸡飞狗跳的研究生生活。',
    },
    {
      period: '2024.1 - 2025.7',
      role: '最焦虑和迷茫的时候',
      organization: '保研&开始实习',
      summary:
        '大三下学期开始，压力非常大，每天都睡不好，期间经历期末考试、参加了三个夏令营。上岸后开始实习，在霸王茶姬做过运营，在小米做过风控合规。',
    },
    {
      period: '2021.9 - 2025.7',
      role: '天津大学',
      organization: '本科生',
      summary:
        '大一读的是智能制造与建造专业，不喜欢学物理，转专业去了财务管理，一个不太明智且草率的决定。',
    },
  ] as ExperienceItem[],
  projects: [
    {
      year: '2026.3-',
      category: '和君咨询',
      title: '咨询实习',
      summary:
        '正在体验，mentor很好很优秀，后面更新。',
    },
    {
      year: '2025.2-2025.7',
      category: '小米',
      title: '金融风险管理实习',
      summary:
        '小米的工作氛围和风评一样，但是这段实习确实让我学到很多，风控很有意思，合规有点无聊。',
    },
    {
      year: '2024.11-2025.2',
      category: '霸王茶姬',
      title: 'O2O&DTC运营实习生',
      summary:
        '体验感还不错的实习，同事们都很年轻很好说话（除了我那诡异的leader），几乎每天都有奶茶，系统把握了电商运营的套路。',
    },
  ] as ProjectItemData[],
  works: {
    gallery: [
      {
        title: '也曾经路过',
        description: '喜欢一切自然的颜色😍',
        image: 'works/photos/photo1.png',
        alt: 'A placeholder frame representing a field research photograph.',
      },
      {
        title: '记录自己',
        description: '留着点回忆给N年后的自己🤔',
        image: 'works/photos/photo2.png',
        alt: 'A placeholder frame representing a conference scene photograph.',
      },
      {
        title: '猫猫和狗狗',
        description: '世界上最伟大的发明🐱🐶',
        image: 'works/photos/photo3.png',
        alt: 'A placeholder frame representing a library interior photograph.',
      },
    ] as WorkPhotoItem[],
    reports: [
      {
        title: '中国财险行业风险分析报告',
        year: '2025-2026',
        description:
          '报告主理人，系统分析中国财险行业的六大风险，深挖了车险的特异性风险',
        image: 'works/reports/report1.png',
        alt: 'A placeholder cover for a corporate governance report.',
        link: '#',
      },
      {
        title: '天津市养老金融白皮书（2026）',
        year: '2025',
        description:
          '负责天津市各金融机构养老金融产品资料搜集、报告撰写；参与养老机构实地调研。',
        image: 'works/reports/report2.png',
        alt: 'A placeholder cover for an institutional capital report.',
        link: '#',
      },
    ] as WorkDocumentItem[],
    presentations: [
      {
        title: '低空经济行业研究',
        year: '2026',
        description:
          '低空经济领域投融资趋势研究',
        image: 'works/ppt/ppt1.png',
        alt: 'A placeholder cover for an ESG presentation deck.',
        link: '#',
      },
      {
        title: '商业航天行业研究',
        year: '2026',
        description:
          '产业链上游（卫星制造）全景研究👽',
        image: 'works/ppt/ppt2.png',
        alt: 'A placeholder cover for a governance presentation deck.',
        link: '#',
      },
    ] as WorkDocumentItem[],
  } as WorksData,
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
    heading: '来找我玩😊',
    body: 'I welcome collaborations across research, strategy, and writing. If you are building something rigorous and meaningful, I would be glad to hear from you.',
    email: "qizhao@mail.nankai.edu.cn",
    links: [
      { label: 'GitHub', href: 'https://github.com/yourname' },
      { label: 'LinkedIn', href: 'https://www.linkedin.com/in/yourname' },
      { label: 'Google Scholar', href: 'https://scholar.google.com/' },
    ] as ContactLink[],
  },
  footer: {
    note: '希望每天都有好运气',
  },
}
