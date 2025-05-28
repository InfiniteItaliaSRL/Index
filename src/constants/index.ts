import { MaterialType, StatsType, NavLinkType, FooterLinkType, SocialLinkType, LocationType } from '../types';
import { Recycle, Truck, Globe as GlobeEurope, Scale, Factory, LeafyGreen, Droplets, BarChart3, Users, Mail, Phone, MapPin } from 'lucide-react';

export const navLinks: NavLinkType[] = [
  {
    id: 'home',
    name: 'Home',
    url: '#home',
  },
  {
    id: 'about',
    name: 'About',
    url: '#about',
  },
  {
    id: 'materials',
    name: 'Materials',
    url: '#materials',
  },
  {
    id: 'impact',
    name: 'Impact',
    url: '#impact',
  },
  {
    id: 'contact',
    name: 'Contact',
    url: '#contact',
  },
];

export const materials: MaterialType[] = [
  {
    id: 'paper',
    name: 'Paper',
    description: 'Recycled paper products including cardboard, newsprint, and office paper, processed and prepared for global export.',
    icon: 'Newspaper',
    benefits: [
      'Reduces deforestation',
      'Lowers energy consumption by 40% compared to virgin paper',
      'Minimizes landfill waste',
      'Creates sustainable packaging solutions'
    ],
  },
  {
    id: 'rubber',
    name: 'Rubber',
    description: 'Processed rubber from tires and industrial waste, transformed into raw materials for manufacturing worldwide.',
    icon: 'CircleDashed',
    benefits: [
      'Prevents toxic tire fires',
      'Reduces oil consumption',
      'Creates durable new products',
      'Minimizes environmental contamination'
    ],
  },
  {
    id: 'metals',
    name: 'Metals',
    description: 'Recycled aluminum, copper, steel, and other metals, sorted and processed to meet international quality standards.',
    icon: 'Cog',
    benefits: [
      'Saves up to 95% energy compared to virgin metal production',
      'Reduces mining impact',
      'Conserves natural resources',
      'Reduces CO2 emissions'
    ],
  },
  {
    id: 'organic',
    name: 'Organic Waste',
    description: 'Processed organic waste converted to compost, biogas, and other valuable resources for sustainable agriculture.',
    icon: 'Sprout',
    benefits: [
      'Creates nutrient-rich soil amendments',
      'Reduces methane emissions from landfills',
      'Produces renewable energy through biogas',
      'Closes the nutrient cycle'
    ],
  },
];

export const stats: StatsType[] = [
  {
    id: 'recycled',
    value: '150K+',
    label: 'Tons Recycled Annually',
    icon: 'Recycle',
  },
  {
    id: 'countries',
    value: '45+',
    label: 'Export Countries',
    icon: 'GlobeEurope',
  },
  {
    id: 'partners',
    value: '200+',
    label: 'Global Partners',
    icon: 'Handshake',
  },
  {
    id: 'impact',
    value: '85K+',
    label: 'Tons CO₂ Saved',
    icon: 'LeafyGreen',
  },
];

export const globalLocations: LocationType[] = [
  {
    id: 'italy-hq',
    country: 'Italy',
    city: 'Milan',
    position: {
      lat: 45.4642,
      lng: 9.1900,
    },
  },
  {
    id: 'germany',
    country: 'Germany',
    city: 'Hamburg',
    position: {
      lat: 53.5511,
      lng: 9.9937,
    },
  },
  {
    id: 'france',
    country: 'France',
    city: 'Marseille',
    position: {
      lat: 43.2965,
      lng: 5.3698,
    },
  },
  {
    id: 'spain',
    country: 'Spain',
    city: 'Barcelona',
    position: {
      lat: 41.3851,
      lng: 2.1734,
    },
  },
  {
    id: 'uk',
    country: 'United Kingdom',
    city: 'Liverpool',
    position: {
      lat: 53.4084,
      lng: -2.9916,
    },
  },
];

export const footerLinks: FooterLinkType[] = [
  {
    id: 'company',
    category: 'Company',
    links: [
      {
        name: 'About Us',
        url: '#about',
      },
      {
        name: 'Careers',
        url: '#careers',
      },
      {
        name: 'News',
        url: '#news',
      },
      {
        name: 'Sustainability',
        url: '#sustainability',
      },
    ],
  },
  {
    id: 'services',
    category: 'Services',
    links: [
      {
        name: 'Recycling',
        url: '#recycling',
      },
      {
        name: 'Export',
        url: '#export',
      },
      {
        name: 'Processing',
        url: '#processing',
      },
      {
        name: 'Consulting',
        url: '#consulting',
      },
    ],
  },
  {
    id: 'resources',
    category: 'Resources',
    links: [
      {
        name: 'Blog',
        url: '#blog',
      },
      {
        name: 'Research',
        url: '#research',
      },
      {
        name: 'Case Studies',
        url: '#case-studies',
      },
      {
        name: 'Publications',
        url: '#publications',
      },
    ],
  },
];

export const socialLinks: SocialLinkType[] = [
  {
    id: 'linkedin',
    name: 'LinkedIn',
    url: 'https://linkedin.com',
    icon: 'Linkedin',
  },
  {
    id: 'twitter',
    name: 'Twitter',
    url: 'https://twitter.com',
    icon: 'Twitter',
  },
  {
    id: 'facebook',
    name: 'Facebook',
    url: 'https://facebook.com',
    icon: 'Facebook',
  },
  {
    id: 'instagram',
    name: 'Instagram',
    url: 'https://instagram.com',
    icon: 'Instagram',
  },
];