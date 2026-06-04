type PublicationLink = {
  label: string;
  href: string;
};

export type Publication = {
  title: string;
  authors: string;
  venue: string;
  year: number;
  selected: boolean;
  tags: string[];
  links: PublicationLink[];
};

export const publications: Publication[] = [
  // {
  //   title: 'Holistic Evidence Attention with Late Readout For Multi-modal Knowledge Graph Completion',
  //   authors: 'Zhenjie Liu, Xingrui Zhuo, Xindong Wu',
  //   venue: 'UnderReview',
  //   year: 2026,
  //   selected: true,
  //   tags: ['Knowledge Graph Completion', 'Multi-modal'],
  //   links: [
  //     // { label: 'PDF', href: 'https://arxiv.org' },
  //     { label: 'Code', href: 'https://anonymous.4open.science/r/HEAR-7100' },
  //     // { label: 'Project', href: '/' },
  //   ],
  // },
  // {
//   title: 'Scalable Models for [Application Area]',
//   authors: 'Collaborator C, Zhenjie Liu, Collaborator D',
//   venue: 'arXiv preprint, 2026',
//   year: 2026,
//   selected: true,
//   tags: ['Scalable Learning', 'Applications'],
  //   links: [
  //     { label: 'PDF', href: 'https://arxiv.org' },
  //     { label: 'Code', href: 'https://github.com/zjliu920' },
  //     { label: 'Project', href: '/' },
  //   ],
  // },
];
