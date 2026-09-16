const base = import.meta.env.BASE_URL;

export const servicesData = [
  {
    id: 'steering',
    serviceKey: 'steering-wheel',
    tag: 'STEERING WHEELS',
    title: 'Hand-Stitched Steering Wheel Cover',
    image: `${base}services/steering-wheel.jpg`,
    category: 'steering',
    description: 'We wrap your steering wheel in real leather. Hand-stitched with heavy thread for a solid grip.',
    features: [
      'Genuine leather with non-slip grip',
      'Hand-stitched in custom colors',
      'Buttons and airbags untouched',
      'Done in a few hours'
    ]
  },
  {
    id: 'bespoke-cabin',
    serviceKey: 'bespoke-cabin',
    tag: 'LEATHER SEATS',
    title: 'Full Leather Seats',
    image: `${base}services/bespoke-seats-green.jpg`,
    category: 'seats',
    description: 'Complete seat reupholstery. We strip old cloth and replace it with clean, fitted leather in the color of your choice.',
    features: [
      'Fresh foam padding added',
      'Custom color stitching',
      'Wipes clean instantly',
      'Includes front seats, back seats, and center console'
    ]
  },
  {
    id: 'door-panels',
    serviceKey: 'door-panels',
    tag: 'DOOR PANELS',
    title: 'Door Panel Upholstery',
    image: `${base}services/door-panel-orange.jpg`,
    category: 'doors',
    description: 'Side door panels and armrests wrapped to match your seats. Clean lines and fresh padding.',
    features: [
      'Color-matched to your interior',
      'Padded armrests',
      'Heavy-duty material',
      'Fitted for all 4 doors'
    ]
  },
  {
    id: 'starlight',
    serviceKey: 'starlight-roof',
    tag: 'ROOF LIGHTS',
    title: 'Starlight Ceiling',
    image: `${base}services/starlight-headliner.jpg`,
    category: 'lighting',
    description: 'Hundreds of fiber optic lights installed into your car ceiling, controlled via your phone.',
    features: [
      'Fiber optic stars',
      'App-controlled colors',
      'Suede/alcantara roof wrap included',
      'Clean hidden wiring'
    ]
  },
  {
    id: 'two-tone-seats',
    serviceKey: 'sport-seats',
    tag: 'SPORT SEATS',
    title: 'Sport Two-Tone Seats',
    image: `${base}services/twotone-prado-seats.jpg`,
    category: 'seats',
    description: 'Aggressive two-tone setups for SUVs. Comes with neck pillows and fitted 7D floor mats.',
    features: [
      'Two-tone leather styling',
      'Custom logo stitching',
      'Waterproof 7D floor mats',
      'Matching head pillows'
    ]
  }
];
