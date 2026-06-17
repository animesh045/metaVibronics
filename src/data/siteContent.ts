export interface Founder {
  name: string;
  role: string;
  bio: string;
  skills: string[];
  email: string;
}

export interface ServiceCard {
  id: string;
  num: string;
  title: string;
  items: string[];
}

export interface IndustryItem {
  emoji: string;
  name: string;
}

export interface Project {
  id: string;
  client: string;
  title: string;
  brief: string;
  deliverables: string[];
  tags: string[];
  isFeatured?: boolean;
  imageUrl: string;
  externalLink?: string;
}

export interface StatItem {
  value: string;
  label: string;
  highlighted?: boolean;
}

export interface ProcessStep {
  num: string;
  title: string;
  desc: string;
}

export interface PricingPlan {
  name: string;
  priceINR: string;
  priceUSD: string;
  period: string;
  isFeatured?: boolean;
  features: string[];
}

export interface SiteContent {
  branding: {
    logoName: string;
    logoDotColor: string;
    email: string;
    phone: string;
    instagram: string;
    responseHours: string;
    secondaryCtaText?: string;
    secondaryCtaLink?: string;
  };
  navigation: {
    links: { label: string; href: string }[];
    ctaText: string;
  };
  hero: {
    eyebrow: string;
    titleHtml: string;
    subtitle: string;
    stats: StatItem[];
    pillars: { name: string; description: string }[];
  };
  about: {
    eyebrow: string;
    headingHtml: string;
    founders: Founder[];
    quoteHtml: string;
  };
  services: {
    eyebrow: string;
    headingHtml: string;
    description: string;
    cards: ServiceCard[];
    industries: IndustryItem[];
  };
  work: {
    eyebrow: string;
    headingHtml: string;
    description: string;
    projects: Project[];
  };
  results: {
    eyebrow: string;
    headingHtml: string;
    stats: StatItem[];
  };
  outcomes: {
    eyebrow: string;
    headingHtml: string;
    items: { num: string; title: string; desc: string }[];
  };
  process: {
    eyebrow: string;
    headingHtml: string;
    steps: ProcessStep[];
  };
  pricing: {
    eyebrow: string;
    headingHtml: string;
    description: string;
    plans: PricingPlan[];
    note: string;
  };
  contact: {
    eyebrow: string;
    headingHtml: string;
    subheading: string;
    description: string;
    fields: { label: string; type: string; placeholder: string; required?: boolean }[];
  };
}

export const defaultSiteContent: SiteContent = {
  "branding": {
    "logoName": "META.VIBRONICS",
    "logoDotColor": "#0066FF",
    "email": "metavibronics@gmail.com",
    "phone": "+91 83688 25928",
    "instagram": "@metavibronics",
    "responseHours": "Within 24 hours"
  },
  "navigation": {
    "links": [
      {
        "label": "About",
        "href": "#about"
      },
      {
        "label": "Services",
        "href": "#services"
      },
      {
        "label": "Work",
        "href": "#work"
      },
      {
        "label": "Pricing",
        "href": "#pricing"
      },
      {
        "label": "Contact",
        "href": "#contact"
      }
    ],
    "ctaText": "Start a Project"
  },
  "hero": {
    "eyebrow": "Brand · Communication · Growth Studio",
    "titleHtml": "Building<br>brands<br>that<br>last.",
    "subtitle": "Two founders. Five disciplines. One studio that treats your brand like it's our own — because we built ours the same way.",
    "stats": [
      {
        "value": "15+",
        "label": "Brands Served"
      },
      {
        "value": "200+",
        "label": "Creative Assets"
      },
      {
        "value": "₹1.11",
        "label": "Best CPC Achieved",
        "highlighted": true
      },
      {
        "value": "8",
        "label": "Industries"
      }
    ],
    "pillars": [
      {
        "name": "Brand Systems",
        "description": "Identity · Guidelines · Positioning"
      },
      {
        "name": "Communication Design",
        "description": "Presentations · Publications · Infographics"
      },
      {
        "name": "Digital Experiences",
        "description": "UI/UX · Design Systems · Landing Pages"
      },
      {
        "name": "Content & Growth",
        "description": "Social · Ads · Performance Marketing"
      },
      {
        "name": "Production & Packaging",
        "description": "Print · Packaging · Event Branding"
      }
    ]
  },
  "about": {
    "eyebrow": "Meet the Founders",
    "headingHtml": "Two founders. One studio. <em>Every project.</em>",
    "founders": [
      {
        "name": "Animesh Lodhi",
        "role": "Founder · Creative Systems & Growth Lead",
        "bio": "Computer Science engineer who built Meta Vibronics from zero while completing his degree. Leads strategy, UI/UX, performance marketing, and creative operations. GATE CS qualified (2025 & 2026). Delivered 100+ design assets. Managed ad campaigns achieving ₹1.11 CPC — across Meta, Google, and LinkedIn.",
        "skills": [
          "Brand Systems",
          "UI/UX · Figma",
          "Meta & Google Ads",
          "Adobe InDesign",
          "Canva Pro",
          "Performance Marketing",
          "Creative Operations",
          "CapCut · InShot"
        ],
        "email": "animesh.metavibronics@gmail.com"
      },
      {
        "name": "Bhumi Gupta",
        "role": "Co-Founder · Creative Strategy & Communication Lead",
        "bio": "Brand designer, content strategist, and published author. Leads brand identity, copywriting, publication design, and creative direction. Her work spans fragrance packaging (Lurance), health supplement communication (BioAro), influencer content systems, and editorial storytelling across 6+ organisations.",
        "skills": [
          "Brand Identity",
          "Packaging Design",
          "Copywriting",
          "Content Strategy",
          "Publication Design",
          "Adobe Illustrator",
          "Canva Pro",
          "Brand Storytelling"
        ],
        "email": "bhumi.metavibronics@gmail.com"
      }
    ],
    "quoteHtml": "Systems <em>+</em> Story <em>=</em> Brands that connect, communicate, and grow."
  },
  "services": {
    "eyebrow": "What We Do",
    "headingHtml": "Five pillars. <em>One studio.</em>",
    "description": "We don't create random posts. We build communication systems that businesses can grow with — strategy, design, and execution under one roof.",
    "cards": [
      {
        "id": "svc-1",
        "num": "01",
        "title": "Brand Systems",
        "items": [
          "Identity & Visual Language",
          "Brand Guidelines",
          "Positioning & Naming",
          "Typography Systems",
          "Colour & Tone"
        ]
      },
      {
        "id": "svc-2",
        "num": "02",
        "title": "Communication Design",
        "items": [
          "Pitch Decks & Presentations",
          "Publications & Brochures",
          "Infographics",
          "Data Visualisation",
          "Company Profiles"
        ]
      },
      {
        "id": "svc-3",
        "num": "03",
        "title": "Digital Experiences",
        "items": [
          "UI/UX Design",
          "Wireframes & Prototypes",
          "Design Systems",
          "Landing Pages",
          "Responsive Web"
        ]
      },
      {
        "id": "svc-4",
        "num": "04",
        "title": "Content & Growth",
        "items": [
          "Social Media Management",
          "Meta & Google Ads",
          "Performance Marketing",
          "Lead Generation",
          "Campaign Strategy"
        ]
      },
      {
        "id": "svc-5",
        "num": "05",
        "title": "Production & Packaging",
        "items": [
          "Packaging Design",
          "Print Production",
          "Event Branding",
          "ID Cards & Certificates",
          "Promotional Material"
        ]
      }
    ],
    "industries": [
      {
        "emoji": "🏥",
        "name": "Healthcare & Dental"
      },
      {
        "emoji": "🧬",
        "name": "Wellness & Nutraceuticals"
      },
      {
        "emoji": "💻",
        "name": "Technology & SaaS"
      },
      {
        "emoji": "🏗️",
        "name": "Construction & Infrastructure"
      },
      {
        "emoji": "🎓",
        "name": "Education & Institutions"
      },
      {
        "emoji": "🚗",
        "name": "Automotive"
      },
      {
        "emoji": "🛍️",
        "name": "Retail & E-Commerce"
      },
      {
        "emoji": "👤",
        "name": "Personal Brands & Authors"
      }
    ]
  },
  "work": {
    "eyebrow": "Our Work",
    "headingHtml": "Built for real <em>businesses.</em>",
    "description": "Every project below started with a 15-minute conversation. These are the brands we've built, grown, and made memorable.",
    "projects": [
      {
        "id": "project-bioaro",
        "client": "BioAro",
        "title": "BioAro Health",
        "brief": "Product communication and catalogue design for a complete health supplement portfolio — maintaining clinical precision and premium positioning across every SKU.",
        "deliverables": [
          "Product cards for 8+ SKUs (Longevity+, PurMidine, CREAGEN range, CellVivo)",
          "Product catalogue",
          "Ingredient communication",
          "Packaging layouts",
          "Brand consistency across all formats"
        ],
        "tags": [
          "International",
          "Health & Nutrition"
        ],
        "isFeatured": true,
        "imageUrl": "/assets/work/bioaro.jpg",
        "externalLink": "https://drive.google.com/drive/folders/1uU8ESnOxvvaj83QqYRcRtkHhCsP9UGAB?usp=drive_link"
      },
      {
        "id": "project-fourthx",
        "client": "FourthX Technologies",
        "title": "FourthX Technologies",
        "brief": "Revived and systematised the brand's Instagram presence through a structured 30-day content strategy.",
        "deliverables": [
          "30-day content system",
          "Daily reels, carousels & statics",
          "Tech copy",
          "3D visuals",
          "Fintech, HealthTech & Real Estate verticals"
        ],
        "tags": [
          "SaaS",
          "Content Strategy"
        ],
        "imageUrl": "/assets/work/fourthx.jpg",
        "externalLink": "https://drive.google.com/drive/folders/1jwlxbxqGOLEsBO0mSR5waJKYFNXlMrKL?usp=drive_link"
      },
      {
        "id": "project-lurance",
        "client": "Lurance Fragrances",
        "title": "Lurance Fragrances",
        "brief": "Complete brand identity for a premium fragrance startup — from zero existing assets.",
        "deliverables": [
          "Brand guidelines",
          "Typography system",
          "Label design",
          "Bottle mockups",
          "Packaging visuals",
          "LinkedIn banner"
        ],
        "tags": [
          "Fragrance",
          "Packaging"
        ],
        "imageUrl": "/assets/work/lurance.jpg",
        "externalLink": "https://lurance.com"
      },
      {
        "id": "project-denstar",
        "client": "Denstar Dental Clinic",
        "title": "Denstar Dental",
        "brief": "Full social media brand system for a multi-speciality dental clinic.",
        "deliverables": [
          "Branding suite",
          "FAQ carousels",
          "Testimonials",
          "Festive content",
          "Service menus",
          "Video creative"
        ],
        "tags": [
          "Healthcare",
          "Brand System"
        ],
        "imageUrl": "/assets/work/denstar.jpg",
        "externalLink": "https://drive.google.com/drive/folders/1KcEafTzC7Dm7mJvEnOJ3-PiGBpo9gphN"
      },
      {
        "id": "project-jmc",
        "client": "JMC Construction",
        "title": "JMC Construction",
        "brief": "Full company profile and brand communication for a national infrastructure firm.",
        "deliverables": [
          "Company profile deck",
          "Project showcase",
          "Leadership profiles",
          "Print-ready layouts"
        ],
        "tags": [
          "Construction",
          "B2B Brand"
        ],
        "imageUrl": "/assets/work/jmc.jpg",
        "externalLink": "https://drive.google.com/drive/folders/1CUII6835TazoPrZcpDDcx5dcYUXYyX-a"
      },
      {
        "id": "project-gurusahiba",
        "client": "GuruSahiba Kaur",
        "title": "GuruSahiba Kaur",
        "brief": "Instagram brand identity and content system for a life coach and published author.",
        "deliverables": [
          "Highlight covers",
          "Quote posts",
          "Tip carousels",
          "Reel covers",
          "Grid aesthetic",
          "Affirmations series"
        ],
        "tags": [
          "Personal Brand",
          "Author"
        ],
        "imageUrl": "/assets/work/gurusahiba.jpg",
        "externalLink": "https://drive.google.com/drive/folders/1WnwVt56gsZb-1hQwmXWTcvipPTgWVO5c"
      },
      {
        "id": "project-1781719604552",
        "client": "BhaavTharang",
        "title": "Instagram Profile Optimization",
        "brief": "",
        "imageUrl": "/assets/work/fourthx.jpg",
        "externalLink": "https://drive.google.com/drive/folders/1P2VIafqNEwcX0QIlCRsRbx0kzQoclARy",
        "tags": [
          "Instagram",
          "Brand Direction"
        ],
        "deliverables": [
          "Highlight Cover",
          "Reel Cover",
          "Brand Identity",
          "Brand Direction",
          "Linktree"
        ]
      }
    ]
  },
  "results": {
    "eyebrow": "Results",
    "headingHtml": "Numbers that come<br>from <em>real work.</em>",
    "stats": [
      {
        "value": "15+",
        "label": "Brands Served"
      },
      {
        "value": "200+",
        "label": "Creative Assets Delivered"
      },
      {
        "value": "8",
        "label": "Industries"
      },
      {
        "value": "₹1.11",
        "label": "Best CPC Achieved",
        "highlighted": true
      },
      {
        "value": "16K+",
        "label": "Organic Views / Cycle"
      },
      {
        "value": "30+",
        "label": "Long-form Videos Edited"
      }
    ]
  },
  "outcomes": {
    "eyebrow": "What You Actually Get",
    "headingHtml": "Not deliverables. <em>Outcomes.</em>",
    "items": [
      {
        "num": "01",
        "title": "One unified brand system",
        "desc": "Not scattered posts from three different people."
      },
      {
        "num": "02",
        "title": "Two specialists, not one generalist",
        "desc": "Strategy + design + content under one brief."
      },
      {
        "num": "03",
        "title": "Two founders on every project",
        "desc": "No juniors. No handoffs. No guesswork."
      },
      {
        "num": "04",
        "title": "Print-ready and digital-ready",
        "desc": "Same brief, every format, zero extra briefing."
      },
      {
        "num": "05",
        "title": "Faster execution, less coordination",
        "desc": "You focus on your business. We handle the brand."
      },
      {
        "num": "06",
        "title": "Work that looks international",
        "desc": "Because some of it already is."
      }
    ]
  },
  "process": {
    "eyebrow": "Process",
    "headingHtml": "How we work <em>with you.</em>",
    "steps": [
      {
        "num": "01",
        "title": "Discover",
        "desc": "We learn your brand, audience, goals, and existing assets before touching anything creative."
      },
      {
        "num": "02",
        "title": "Strategise",
        "desc": "We map your communication needs and design the right system for your stage and goals."
      },
      {
        "num": "03",
        "title": "Design",
        "desc": "We execute across all formats — digital, print, motion — from one brief, with zero fragmentation."
      },
      {
        "num": "04",
        "title": "Launch",
        "desc": "We deploy, manage, and maintain across platforms, campaigns, and touchpoints."
      },
      {
        "num": "05",
        "title": "Optimise",
        "desc": "We review results, track what works, and refine the system continuously."
      }
    ]
  },
  "pricing": {
    "eyebrow": "Pricing",
    "headingHtml": "Choose how we <em>work together.</em>",
    "description": "All packages are customisable. You only pay for what you need. Ad spend is separate and decided by you.",
    "plans": [
      {
        "name": "Startup",
        "priceINR": "₹4,999",
        "priceUSD": "$99",
        "period": "per month",
        "features": [
          "12 Instagram + Facebook Posts/month",
          "4 Reels/month",
          "15 Stories/month",
          "Hashtag Research",
          "Post Creative Designing",
          "5 LinkedIn Posts/month"
        ]
      },
      {
        "name": "Business",
        "priceINR": "₹8,999",
        "priceUSD": "$179",
        "period": "per month",
        "features": [
          "18 Instagram + Facebook Posts/month",
          "5 Reels/month",
          "Facebook Business Manager Setup",
          "Tweet Engagement + Video Ads",
          "10 LinkedIn Posts + Blog Sharing",
          "YouTube Shorts (5/month)"
        ]
      },
      {
        "name": "Enterprises",
        "priceINR": "₹12,999",
        "priceUSD": "$259",
        "period": "per month",
        "isFeatured": true,
        "features": [
          "24 Posts/month across platforms",
          "Audience Research & Post Boosting",
          "Meta Ads + Pixel Installation",
          "Remarketing + Custom Audiences",
          "Facebook Analytics Report",
          "Google Business Management"
        ]
      },
      {
        "name": "Platinum",
        "priceINR": "₹19,999",
        "priceUSD": "$399",
        "period": "per month",
        "features": [
          "30 Posts/month — all platforms",
          "Dynamic Ads + Carousel Ads",
          "Facebook Catalogue Creation",
          "Monthly Reports + Traffic Monitoring",
          "YouTube Shorts + Video Editing",
          "LinkedIn Business Setup + Reports"
        ]
      }
    ],
    "note": "All services are customisable — only pay for what you need. Packages exclude taxes. Ad budget is decided by you, separate from retainer fees. GST invoice available at 18% extra."
  },
  "contact": {
    "eyebrow": "Contact",
    "headingHtml": "Let's build something <em>meaningful.</em>",
    "subheading": "Every brand starts with a conversation.",
    "description": "Tell us about your business and what you're trying to achieve. We'll come back within 24 hours with thoughts — not a template pitch.",
    "fields": [
      {
        "label": "Your Name",
        "type": "text",
        "placeholder": "Rajesh Kumar",
        "required": true
      },
      {
        "label": "Email Address",
        "type": "email",
        "placeholder": "rajesh@company.com",
        "required": true
      },
      {
        "label": "Phone (optional)",
        "type": "tel",
        "placeholder": "+91 98765 43210"
      },
      {
        "label": "Service Interested In",
        "type": "select",
        "placeholder": "Select a service"
      },
      {
        "label": "Tell us about your project",
        "type": "textarea",
        "placeholder": "Share anything about your business..."
      }
    ]
  }
};
