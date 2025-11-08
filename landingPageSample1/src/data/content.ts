// Editable content data for the landing page
// TODO: Update all values with your business information

import type {
  Service,
  PriceTier,
  Testimonial,
  FAQItem,
  CompanyProfile,
  TrustPartner,
} from '../types/content';

// TODO: Update company information
export const companyProfile: CompanyProfile = {
  name: 'Your Business Name',
  tagline: 'Professional Solutions That Drive Results',
  description:
    'We provide exceptional services tailored to help your business grow and succeed in today\'s competitive market.',
  phone: '+1-555-555-1234',
  email: 'contact@yourbusiness.com',
  address: {
    street: '123 Main Street',
    city: 'Your City',
    state: 'ST',
    zip: '12345',
    country: 'USA',
  },
  hours: 'Mon-Fri: 9:00 AM - 5:00 PM',
  social: {
    facebook: 'https://facebook.com/yourbusiness',
    twitter: 'https://twitter.com/yourbusiness',
    linkedin: 'https://linkedin.com/company/yourbusiness',
    instagram: 'https://instagram.com/yourbusiness',
  },
};

// TODO: Update trust partners/clients
export const trustPartners: TrustPartner[] = [
  { id: '1', name: 'Partner One', logo: 'logo1' },
  { id: '2', name: 'Partner Two', logo: 'logo2' },
  { id: '3', name: 'Partner Three', logo: 'logo3' },
  { id: '4', name: 'Partner Four', logo: 'logo4' },
  { id: '5', name: 'Partner Five', logo: 'logo5' },
];

// TODO: Update services
export const services: Service[] = [
  {
    id: 'service-1',
    title: 'Service One',
    description:
      'Comprehensive solutions designed to streamline your operations and maximize efficiency.',
    icon: 'chart',
  },
  {
    id: 'service-2',
    title: 'Service Two',
    description:
      'Expert consultation and strategic planning to help you achieve your business goals.',
    icon: 'users',
  },
  {
    id: 'service-3',
    title: 'Service Three',
    description:
      'Innovative technology solutions that keep you ahead of the competition.',
    icon: 'rocket',
  },
  {
    id: 'service-4',
    title: 'Service Four',
    description:
      'Dedicated support and maintenance to ensure your systems run smoothly 24/7.',
    icon: 'shield',
  },
  {
    id: 'service-5',
    title: 'Service Five',
    description:
      'Data-driven insights and analytics to inform your business decisions.',
    icon: 'lightbulb',
  },
  {
    id: 'service-6',
    title: 'Service Six',
    description:
      'Scalable solutions that grow with your business and adapt to your needs.',
    icon: 'settings',
  },
];

// TODO: Update pricing tiers
export const pricingTiers: PriceTier[] = [
  {
    id: 'starter',
    name: 'Starter',
    price: '$49',
    period: '/month',
    description: 'Perfect for small businesses just getting started.',
    features: [
      'Up to 10 users',
      'Basic features',
      'Email support',
      '1 GB storage',
      'Monthly reports',
    ],
  },
  {
    id: 'growth',
    name: 'Growth',
    price: '$99',
    period: '/month',
    description: 'Ideal for growing businesses with expanding needs.',
    features: [
      'Up to 50 users',
      'Advanced features',
      'Priority support',
      '10 GB storage',
      'Weekly reports',
      'Custom integrations',
    ],
    highlighted: true,
  },
  {
    id: 'pro',
    name: 'Professional',
    price: '$199',
    period: '/month',
    description: 'For established businesses requiring premium support.',
    features: [
      'Unlimited users',
      'All features',
      '24/7 phone support',
      'Unlimited storage',
      'Real-time analytics',
      'Dedicated account manager',
      'Custom development',
    ],
  },
];

// TODO: Update testimonials
export const testimonials: Testimonial[] = [
  {
    id: 'testimonial-1',
    name: 'John Smith',
    role: 'CEO',
    company: 'Tech Corp',
    quote:
      'Working with this team has been transformative for our business. Their expertise and dedication are unmatched.',
  },
  {
    id: 'testimonial-2',
    name: 'Sarah Johnson',
    role: 'Marketing Director',
    company: 'Growth Inc',
    quote:
      'The results speak for themselves. We\'ve seen a 300% increase in engagement since implementing their solutions.',
  },
  {
    id: 'testimonial-3',
    name: 'Michael Chen',
    role: 'Founder',
    company: 'StartUp Labs',
    quote:
      'Exceptional service and support. They truly understand our needs and deliver beyond expectations.',
  },
  {
    id: 'testimonial-4',
    name: 'Emily Rodriguez',
    role: 'Operations Manager',
    company: 'Enterprise Solutions',
    quote:
      'The attention to detail and commitment to quality is outstanding. Highly recommended!',
  },
];

// TODO: Update FAQ items
export const faqItems: FAQItem[] = [
  {
    id: 'faq-1',
    question: 'How do I get started?',
    answer:
      'Getting started is easy! Simply choose a plan that fits your needs, sign up, and our team will guide you through the onboarding process. We\'ll have you up and running in no time.',
  },
  {
    id: 'faq-2',
    question: 'What payment methods do you accept?',
    answer:
      'We accept all major credit cards (Visa, MasterCard, American Express), PayPal, and bank transfers for annual subscriptions. All payments are processed securely.',
  },
  {
    id: 'faq-3',
    question: 'Can I change my plan later?',
    answer:
      'Absolutely! You can upgrade or downgrade your plan at any time. Changes will be reflected in your next billing cycle, and we\'ll prorate any differences.',
  },
  {
    id: 'faq-4',
    question: 'Is there a free trial available?',
    answer:
      'Yes, we offer a 14-day free trial on all plans. No credit card required. You can explore all features and decide which plan works best for you.',
  },
  {
    id: 'faq-5',
    question: 'What kind of support do you provide?',
    answer:
      'Support varies by plan. All plans include email support with response times within 24 hours. Growth and Professional plans include priority support, and Professional plans get 24/7 phone support with a dedicated account manager.',
  },
  {
    id: 'faq-6',
    question: 'Do you offer custom solutions?',
    answer:
      'Yes! Our Professional plan includes custom development services. We can tailor our solutions to meet your specific business requirements. Contact us to discuss your needs.',
  },
];

