export interface MaterialType {
  id: string;
  name: string;
  description: string;
  icon: string;
  benefits: string[];
}

export interface StatsType {
  id: string;
  value: string;
  label: string;
  icon: string;
}

export interface TeamMemberType {
  id: string;
  name: string;
  position: string;
  image: string;
}

export interface TestimonialType {
  id: string;
  name: string;
  company: string;
  quote: string;
  image: string;
}

export interface SocialLinkType {
  id: string;
  name: string;
  url: string;
  icon: string;
}

export interface NavLinkType {
  id: string;
  name: string;
  url: string;
}

export interface FooterLinkType {
  id: string;
  category: string;
  links: Array<{
    name: string;
    url: string;
  }>;
}

export interface LocationType {
  id: string;
  country: string;
  city: string;
  position: {
    lat: number;
    lng: number;
  };
}