export interface Project {
  slug: string
  title: string
  tagline: string
  description: string
  year: string
  role: string
  tags: string[]
  images: {
    thumbnail: string
    hero: string
    gallery?: string[]
  }
  links?: {
    live?: string
    github?: string
    appStore?: string
  }
  challenges?: string[]
  solutions?: string[]
}

export const projects: Project[] = [
  {
    slug: 'stockflow',
    title: 'StockFlow',
    tagline: 'Real-time inventory management',
    description: 'A comprehensive inventory management system built for retail businesses...',
    year: '2024',
    role: 'Full-stack Developer',
    tags: ['Next.js', 'TypeScript', 'Prisma', 'PostgreSQL'],
    images: {
      thumbnail: '/projects/stockflow/thumbnail.jpg',
      hero: '/projects/stockflow/hero.jpg',
      gallery: [
        '/projects/stockflow/screen-1.jpg',
        '/projects/stockflow/screen-2.jpg',
      ]
    },
    links: {
      live: 'https://stockflow.example.com'
    },
    challenges: [
      'Real-time stock synchronization across multiple locations',
      'Complex reporting requirements'
    ],
    solutions: [
      'Implemented WebSocket connections for live updates',
      'Built custom analytics dashboard with Chart.js'
    ]
  },
  // Nutripaws and Abit Hub...
  {
    slug: 'nutripaws',
    title: 'Nutripaws',
    tagline: 'Personalized pet nutrition',
    description: 'A platform that provides tailored nutrition plans for pets based on their health data...',
    year: '2023',
    role: 'Backend Developer',
    tags: ['Node.js', 'Express', 'MongoDB'],
    images: {
      thumbnail: '/projects/nutripaws/thumbnail.jpg',
      hero: '/projects/nutripaws/hero.jpg',
    },
    links: {
      live: 'https://nutripaws.example.com',
      github: 'https://github.com/username/nutripaws'
    },
    challenges: [
      'Handling diverse dietary requirements for different pet species',
      'Integrating with third-party veterinary APIs'
    ],
    solutions: [
      'Developed a flexible schema to accommodate various dietary needs',
      'Implemented robust API integration with error handling'
    ]
  },
  {
    slug: 'abit-hub',
    title: 'Abit Hub',
    tagline: 'Freelance developer marketplace',
    description: 'A marketplace connecting freelance developers with clients seeking tech solutions...',
    year: '2022',
    role: 'Frontend Developer',
    tags: ['React', 'Redux', 'Tailwind CSS'],
    images: {
      thumbnail: '/projects/abit-hub/thumbnail.jpg',
      hero: '/projects/abit-hub/hero.jpg',
    },
    links: {
      live: 'https://abithub.example.com',
      github: 'https://github.com/username/abit-hub'
    },
    challenges: [
      'Creating an intuitive user interface for both clients and developers',
      'Implementing secure payment processing'
    ],
    solutions: [
      'Designed a user-friendly UI with clear navigation and responsive design',
      'Integrated Stripe for secure and reliable payment handling'
    ]
  }
]