import { CaseStudy } from '@/types';

export const caseStudies: CaseStudy[] = [
  {
    id: '1',
    title: 'E-commerce Platform Transformation',
    slug: 'ecommerce-platform-transformation',
    description: 'How we helped a traditional retailer achieve 300% growth through digital transformation',
    client: 'RetailTech Co.',
    industry: 'Retail & E-commerce',
    services: ['Digital Transformation', 'E-commerce Development', 'UX Design'],
    challenge: 'RetailTech Co. was struggling with an outdated online presence and losing market share to digital-first competitors. Their legacy systems were unable to handle modern e-commerce requirements.',
    solution: 'We implemented a modern, scalable e-commerce platform using Next.js and headless CMS, with custom inventory management integration and real-time analytics.',
    results: [
      '300% increase in online sales',
      '65% improvement in page load speed',
      '45% increase in mobile conversion rate',
      'Reduced operational costs by 40%'
    ],
    testimonial: {
      quote: 'The transformation of our digital presence has revolutionized how we do business. Our customers love the new experience, and our team is more efficient than ever.',
      author: 'Sarah Johnson',
      position: 'CEO, RetailTech Co.'
    },
    imageUrl: '/images/case-studies/retail-tech-transformation.jpg',
    publishedAt: new Date('2025-08-15')
  },
  {
    id: '2',
    title: 'AI-Powered Healthcare Analytics',
    slug: 'healthcare-analytics-platform',
    description: 'Developing an AI platform that revolutionized patient care prediction',
    client: 'MedAI Solutions',
    industry: 'Healthcare',
    services: ['AI Development', 'Data Analytics', 'Cloud Infrastructure'],
    challenge: 'MedAI Solutions needed a sophisticated analytics platform to process vast amounts of patient data and provide predictive insights for better care management.',
    solution: 'We built a secure, HIPAA-compliant analytics platform using machine learning algorithms to predict patient outcomes and optimize care pathways.',
    results: [
      'Predicted patient risks with 94% accuracy',
      'Reduced hospital readmissions by 35%',
      'Saved $2.5M in operational costs',
      'Processing 1M+ patient records daily'
    ],
    testimonial: {
      quote: 'This platform has transformed how we approach patient care. The predictive insights have been invaluable for our medical staff.',
      author: 'Dr. Michael Chen',
      position: 'CTO, MedAI Solutions'
    },
    imageUrl: '/images/case-studies/medai-analytics.jpg',
    publishedAt: new Date('2025-09-20')
  },
  {
    id: '3',
    title: 'Sustainable Smart City Platform',
    slug: 'smart-city-platform',
    description: 'Creating a comprehensive IoT platform for smart city management',
    client: 'GreenCity Technologies',
    industry: 'Smart Cities & IoT',
    services: ['IoT Development', 'Real-time Analytics', 'Mobile App Development'],
    challenge: 'GreenCity Technologies needed a unified platform to manage various smart city components including traffic, waste management, and energy consumption.',
    solution: 'We developed a scalable IoT platform that integrates multiple city services with real-time monitoring and predictive maintenance capabilities.',
    results: [
      'Reduced energy consumption by 25%',
      'Optimized waste collection routes by 40%',
      'Decreased traffic congestion by 30%',
      'Real-time monitoring of 50,000+ IoT devices'
    ],
    testimonial: {
      quote: 'The platform has made our city operations significantly more efficient and environmentally friendly. It\'s exceeded our expectations.',
      author: 'Emma Rodriguez',
      position: 'Smart City Director, GreenCity Technologies'
    },
    imageUrl: '/images/case-studies/smart-city.jpg',
    publishedAt: new Date('2025-10-01')
  }
];