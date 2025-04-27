
import { ComponentInfo } from "@/types/arLearning";

export const fittings: ComponentInfo[] = [
  {
    id: 'bolts',
    name: 'Electrical Fixing Bolts',
    description: 'Various bolts used in electrical installations including M6, M8, and M10 sizes.',
    youtubeId: 'xrEHoA_iDww',
    imageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f', // Updated to use accessible image
    specifications: [
      'Common sizes: M6, M8, M10',
      'Material: Zinc plated steel',
      'Available in different lengths',
      'Meets BS 4190 requirements'
    ],
    tips: [
      'Use correct size washers',
      'Ensure proper torque settings',
      'Consider anti-vibration washers where needed'
    ]
  },
  {
    id: 'screws',
    name: 'Electrical Fixing Screws',
    description: 'Self-tapping and wood screws for electrical installations.',
    youtubeId: 'xrEHoA_iDww',
    imageUrl: '/images/electrical-components/screws.jpg',
    specifications: [
      'Types: Self-tapping, wood screws',
      'Sizes: No.6 to No.14',
      'Materials: Zinc plated, brass',
      'Various head types available'
    ],
    tips: [
      'Pre-drill when necessary',
      'Use correct screw length',
      'Consider surface material'
    ]
  },
  {
    id: 'grommets',
    name: 'Cable Grommets',
    description: 'Rubber and plastic grommets for cable protection.',
    youtubeId: 'xrEHoA_iDww',
    imageUrl: '/images/electrical-components/grommets.jpg',
    specifications: [
      'Sizes: 20mm to 32mm',
      'Materials: PVC, Rubber',
      'Open and closed types',
      'UV resistant options'
    ],
    tips: [
      'Select correct size for cable',
      'Ensure proper seating',
      'Check for sharp edges'
    ]
  }
];
