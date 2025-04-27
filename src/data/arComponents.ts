import { ComponentInfo } from "@/types/arLearning";

export const arComponents: ComponentInfo[] = [
  {
    id: 'rcbo',
    name: 'RCBO (BS EN 61009)',
    description: 'Residual Current Breaker with Overcurrent protection, commonly used in UK consumer units. Combines RCD and MCB functionality in a single device.',
    youtubeId: 'mc979OhitAg',
    specifications: [
      'Common ratings: 6A, 10A, 16A, 20A, 32A, 40A',
      'Typical sensitivity: 30mA for personal protection',
      'Breaking capacity: 6kA to 10kA',
      'Type AC, A, or B depending on application'
    ],
    tips: [
      'Always test the test button monthly',
      'Check terminal tightness during installation',
      'Ensure correct current rating for circuit'
    ]
  },
  {
    id: 'consumer-unit',
    name: 'Consumer Unit (BS 7671)',
    description: 'Modern metal consumer units (distribution boards) required by the 18th Edition IET Wiring Regulations for UK domestic installations.',
    youtubeId: '9iKD8kW84C0',
    specifications: [
      'Must be metal construction for domestic installations',
      'Typical sizes: 4-24 ways',
      'Main switch rating: 63A or 100A',
      'Compliant with BS EN 61439-3'
    ],
    tips: [
      'Always ensure proper labeling of circuits',
      'Maintain adequate working space',
      'Check cable entry points for sharp edges'
    ]
  },
  {
    id: 'socket-outlet',
    name: 'Socket Outlet (BS 1363)',
    description: 'UK standard 13A socket outlet with safety features including shuttered live/neutral and earth pin.',
    youtubeId: 'vN9aR2wKv0U',
    specifications: [
      'Rating: 13A at 230V',
      'Must include safety shutters',
      'Required earth connection',
      'Standard British 3-pin configuration'
    ],
    tips: [
      'Check socket alignment during installation',
      'Ensure proper earth connection',
      'Verify shutter operation'
    ]
  },
  {
    id: 'mcb',
    name: 'MCB (BS EN 60898)',
    description: 'Miniature Circuit Breakers used for overcurrent protection in UK electrical installations.',
    youtubeId: 'HB-BgG7pHWo',
    specifications: [
      'Common types: B, C, and D curve',
      'Standard ratings: 6A to 63A',
      'Breaking capacity: 6kA to 10kA',
      'Single pole and multi-pole options'
    ],
    tips: [
      'Select correct curve type for load',
      'Ensure adequate breaking capacity',
      'Check load calculations carefully'
    ]
  },
  {
    id: 'rcd',
    name: 'RCD (BS EN 61008)',
    description: 'Residual Current Device providing additional protection against electric shock in UK installations.',
    youtubeId: 'QR3q_lxYgXo',
    specifications: [
      'Typical ratings: 40A, 63A, 80A, 100A',
      'Standard sensitivity: 30mA or 100mA',
      'Type AC, A, or B depending on loads',
      'Operating time: ≤ 40ms at rated current'
    ],
    tips: [
      'Regular testing required',
      'Consider selectivity with other devices',
      'Check for nuisance tripping causes'
    ]
  }
];
