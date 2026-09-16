const base = import.meta.env.BASE_URL;

export const servicesData = [
  {
    id: 'steering',
    serviceKey: 'steering-wheel',
    tag: 'STEERING WHEELS',
    title: 'Hand-Stitched Steering Wheel Cover',
    image: `${base}services/steering-wheel.jpg`,
    category: 'steering',
    description: 'We wrap your steering wheel in real comfortable leather. Hand-stitched with strong thread and custom colors for great grip and feel while driving.',
    features: [
      'Genuine leather with soft, non-slip grip',
      'Hand-stitched in clean dual colors (like Orange & Black)',
      'Buttons, horn, and airbag remain 100% working',
      'Done in just a few hours'
    ]
  },
  {
    id: 'bespoke-cabin',
    serviceKey: 'bespoke-cabin',
    tag: 'LEATHER SEATS',
    title: 'Full Car Leather Seats & Armrests',
    image: `${base}services/bespoke-seats-green.jpg`,
    category: 'seats',
    description: 'Complete new leather seats for your car. We replace old or worn cloth seats with clean, comfortable leather in any color you like (like Sage Green, Black, Brown, or Beige).',
    features: [
      'Fresh new foam padding for extra comfort',
      'Custom colors to match your style',
      'Easy to clean and long lasting',
      'Includes front seats, back seats, and center console'
    ]
  },
  {
    id: 'door-panels',
    serviceKey: 'door-panels',
    tag: 'DOOR PANELS',
    title: 'Car Door Panel Leather Upholstery',
    image: `${base}services/door-panel-orange.jpg`,
    category: 'doors',
    description: 'Upgrade the side door panels and armrests of your car with matching leather. Beautiful lines, soft padding, and clean finish.',
    features: [
      'Matches the exact color of your seats',
      'Soft and comfortable armrest feel',
      'Durable leather that does not peel or crack',
      'Clean fit for all 4 doors'
    ]
  },
  {
    id: 'starlight',
    serviceKey: 'starlight-roof',
    tag: 'CEILING LIGHTS',
    title: 'Starlight Ceiling (Star Roof Lights)',
    image: `${base}services/starlight-headliner.jpg`,
    category: 'lighting',
    description: 'Transform your car ceiling into a shining starry night sky. We put hundreds of shining fiber optic star lights into your roof with phone app control.',
    features: [
      'Hundreds of shining star lights in your roof',
      'Change colors with phone app or remote control',
      'Includes soft suede/alcantara roof wrapping',
      'Safe wiring done by experts'
    ]
  },
  {
    id: 'two-tone-seats',
    serviceKey: 'sport-seats',
    tag: 'SPORT SEATS & MATS',
    title: 'Sport Two-Tone Seats & 7D Floor Mats',
    image: `${base}services/twotone-prado-seats.jpg`,
    category: 'seats',
    description: 'Sporty red and black seats for SUVs like Prado, Patrol, and Land Cruisers. Comes with matching neck pillows and heavy-duty 7D waterproof floor mats.',
    features: [
      'Two-tone sport leather (Red & Black)',
      'Custom car name stitching (Prado, Toyota, etc.)',
      'Waterproof 7D diamond floor mats protect your floor',
      'Includes matching comfortable head pillows'
    ]
  }
];
