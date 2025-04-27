
import { ComponentInfo } from "@/types/arLearning";

export const conduitAccessories: ComponentInfo[] = [
  {
    id: 'saddles',
    name: 'Conduit Saddles',
    description: 'Spacer bar saddles and distance saddles for metal conduit mounting.',
    imageUrl: '/images/electrical-components/saddles.jpg',
    specifications: [
      'Sizes: 20mm, 25mm, 32mm',
      'Types: Distance, Spacer bar',
      'Material: Hot-dip galvanized',
      'Meets BS 4568 requirements'
    ],
    tips: [
      'Use appropriate fixing method',
      'Maintain correct spacing',
      'Consider expansion in long runs'
    ]
  },
  {
    id: 'unistrut-brackets',
    name: 'Unistrut Brackets',
    description: 'L-brackets and right angle brackets for strut mounting systems.',
    imageUrl: '/images/electrical-components/unistrut-brackets.jpg',
    specifications: [
      'Types: L-brackets, Right angles',
      'Material: Hot-dip galvanized',
      'Load ratings available',
      'Compatible with 41x41 channel'
    ],
    tips: [
      'Check load ratings',
      'Use appropriate channel nuts',
      'Consider seismic requirements'
    ]
  },
  {
    id: 'clips',
    name: 'Conduit Clips',
    description: 'Spring clips and two-piece clips for conduit securing.',
    imageUrl: '/images/electrical-components/clips.jpg',
    specifications: [
      'Types: Spring, Two-piece',
      'Sizes: 20mm to 32mm',
      'Material: Spring steel',
      'Zinc plated finish'
    ],
    tips: [
      'Use correct size for conduit',
      'Ensure secure mounting',
      'Space correctly per regulations'
    ]
  }
];
