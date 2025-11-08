// TypeScript types for content data

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string; // SVG icon name/identifier
}

export interface PriceTier {
  id: string;
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  highlighted?: boolean;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company?: string;
  quote: string;
  avatar?: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface CompanyProfile {
  name: string;
  tagline: string;
  description: string;
  phone: string;
  email: string;
  address: {
    street: string;
    city: string;
    state: string;
    zip: string;
    country: string;
  };
  hours: string;
  social: {
    facebook?: string;
    twitter?: string;
    linkedin?: string;
    instagram?: string;
  };
}

export interface TrustPartner {
  id: string;
  name: string;
  logo: string; // SVG identifier
}

