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
  hidden?: boolean;
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
    "subtitle": "Thoughtful strategy. Purposeful design. Brands built to endure.",
    "stats": [
      {
        "value": "20+",
        "label": "Brands Served",
        "highlighted": true
      },
      {
        "value": "400+",
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
      },
      {
        "name": "Video Editing",
        "description": "Reels · Shorts · Ads"
      }
    ]
  },
  "about": {
    "eyebrow": "Meet the Founders",
    "headingHtml": "<em>Systems</em> drive growth. <em>Stories</em> build connection. <br /> <em> We bring both to every brand. </em>",
    "founders": [
      {
        "name": "Animesh Lodhi",
        "role": "Founder · Creative Systems & Growth Lead",
        "bio": "Animesh blends strategy, digital experiences, and growth to build brands that are scalable and easy to navigate. His work spans UI/UX, visual systems, performance campaigns, and cross-platform communication across multiple industries.",
        "skills": [
          "Brand Systems",
          "UI/UX",
          "Performance Marketing",
          "Figma",
          "Meta & Google Ads",
          "Canva Pro",
          "Adobe InDesign",
          "Creative Operations",
          "CapCut",
          "InShot"
        ],
        "email": "animesh.metavibronics@gmail.com"
      },
      {
        "name": "Bhumi Gupta",
        "role": "Co-Founder · Creative Strategy & Brand Lead",
        "bio": "Bhumi blends design, content, and communication to build cohesive brand experiences. From visual identities and packaging to publication design and content systems, she focuses on creating work that is thoughtful, purposeful, and easy to connect with.",
        "skills": [
          "Brand Identity",
          "Packaging Design",
          "Copywriting",
          "Content Strategy",
          "Publication Design",
          "Creative Direction",
          "Adobe Illustrator",
          "Canva Pro"
        ],
        "email": "bhumi.metavibronics@gmail.com"
      }
    ],
    "quoteHtml": "Our strengths are different, but our approach is shared: build brands with clarity, consistency, and intention."
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
        "id": "project-1781805773469",
        "client": "WurkinProgress",
        "title": "WurkinProgress",
        "brief": "A one-month graphic design internship focused on supporting both digital and offline brand communication. Worked closely with the creative and brand teams to design campaign assets, build cohesive visual systems, and adapt branding across multiple formats including social media, packaging, menus, and event collaterals. The role emphasized strong design fundamentals, consistency, and iterative feedback-based execution across multiple live projects.",
        "imageUrl": "/assets/work/wp.png",
        "externalLink": "https://drive.google.com/drive/folders/1Tug2wif5E6lgIjsPLU5cfOeY_HlCcOVC",
        "tags": [
          "Graphic Design",
    "Brand Identity",
    "Social Media Design",
    "Print Design",
    "Packaging Design",
    "Visual Research",
    "Marketing Collaterals",
    "Campaign Design"
        ],
        "deliverables": [
       "Social media creatives (static posts & carousels)",
    "Campaign assets for digital marketing",
    "Brand identity support (typography, layouts, visual systems)",
    "Offline collateral design (menus, posters, packaging, event creatives)",
    "Moodboards and visual references",
    "Multi-format creative adaptations"
        ],
        "hidden": true
      },
       {
        "id": "project-1781805851562",
        "client": "Thrilerrr",
        "title": "Thrilerrr",
        "brief": "Freelance content system designed for a Gen-Z lifestyle brand via Webfynd Digital. The brief required balancing a sensitive topic with visual clarity and tonal sensitivity, while keeping every piece consistent with the brand's existing voice and aesthetic. Delivered the full 20-piece system on a tight turnaround.",
        "imageUrl": "/assets/work/thri.png",
        "externalLink": "https://drive.google.com/drive/folders/1xxARoFHLBVyRAa4h1BeQ3pwouXrG-rBc",
        "tags": [
         "Social Media Design",
    "Instagram Carousel Design",
    "Reel Cover Design",
    "Content Systems",
    "Gen Z Branding",
    "Brand Consistency",
    "Freelance Design"
        ],
        "deliverables": [
       "Instagram carousel posts",
    "Animated reel covers",
    "20-piece content system"
        ],
         "hidden": false
      },
      {
id: "project-fourthx",
client: "FourthX Technologies",
title: "FourthX Technologies",
brief:
"Revived and systematised FourthX Technologies' Instagram and social media presence through a structured 30-day content strategy. Planned, designed, and executed a complete content ecosystem including reels, static posts, educational carousels, and industry-focused visual storytelling to improve engagement and establish a consistent digital brand presence.",
deliverables: [
"30-Day Content Calendar",
"Daily Reels",
"Educational Carousels",
"Static Social Media Posts",
"Tech-focused Copywriting",
"Content Research",
"Brand Positioning"
],
tags: [
"Social Media Management",
"Content Strategy",
"Instagram Growth",
"SaaS Marketing",
"Creative Direction"
],
imageUrl: "/assets/work/fourthx.png",
externalLink:
"https://drive.google.com/drive/folders/1jwlxbxqGOLEsBO0mSR5waJKYFNXlMrKL?usp=drive_link",
                 "hidden": false
},
       {
id: "project-1781805925539",
client: "Inter College Youth Festival",
title: "Rhythm - Annual Fest",
brief:
"Served as Head of Creative and Overall Student Coordinator for Rhythm, the Annual Inter-College Youth Festival. Led the complete creative ecosystem of the festival including branding, campaign strategy, social media promotions, sponsorship creatives, stage backdrops, certificates, standees, banners, merchandise, venue branding, and print production.",
imageUrl: "/assets/work/rhy.png",
externalLink:
"https://drive.google.com/drive/folders/13wvfQVjqBx1ukxCHMNQMxFsyXjtpdO2t",
tags: [
"Creative Direction",
"Event Branding",
"Print Design",
"Leadership",
"Festival Management"
],
deliverables: [
"Festival Brand Identity",
"Social Media Campaigns",
"Stage Backdrop Design",
"Print-ready Banners",
"Certificates",
"Merchandise Graphics",
"Venue Branding"
]
},
     {
id: "project-1781719604552",
client: "BhaavTharang",
title: "Instagram Profile Optimization",
brief:
"Developed a complete Instagram profile optimization and visual identity system for BhaavTharang. Created a cohesive brand experience through profile structuring, highlight covers, reel covers, visual direction, Linktree setup, and content branding to improve credibility and audience engagement.",
imageUrl: "/assets/work/bhaav.png",
externalLink:
"https://drive.google.com/drive/folders/1P2VIafqNEwcX0QIlCRsRbx0kzQoclARy",
tags: [
"Instagram",
"Brand Direction",
"Profile Optimization",
"Brand Identity",
"Visual Design"
],
deliverables: [
"Instagram Profile Optimization",
"Highlight Cover Design",
"Reel Cover System",
"Brand Identity",
"Brand Direction",
"Linktree Setup",
"Visual Consistency Framework"
]
},
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
        "isFeatured": false,
        "imageUrl": "/assets/work/bioaro.png",
        "externalLink": "https://drive.google.com/drive/folders/1uU8ESnOxvvaj83QqYRcRtkHhCsP9UGAB?usp=drive_link"
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
        "imageUrl": "/assets/work/lur.png",
        "externalLink": "https://drive.google.com/file/d/1j_HTli1DO0NwQzq3ursYzn4RhDlWWhXF/view?usp=sharing"
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
        "imageUrl": "/assets/work/denstar.png",
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
        "imageUrl": "/assets/work/jmc.png",
        "externalLink": "https://drive.google.com/drive/folders/1CUII6835TazoPrZcpDDcx5dcYUXYyX-a"
      },
      {
id: "project-gurusahiba",
client: "GuruSahiba Kaur",
title: "GuruSahiba Kaur",
brief:
"Built and managed the complete personal brand ecosystem for GuruSahiba Kaur, a life coach and published author. Developed the brand identity, Instagram profile system, and a structured content strategy supported by a 30-day content calendar and audience-focused storytelling.",
deliverables: [
"Brand Identity Design",
"Instagram Profile Optimization",
"30-Day Content Calendar",
"Content Strategy",
"Educational Carousels",
"Reel Covers",
"Highlight Covers"
],
tags: [
"Personal Branding",
"Author",
"Brand Identity",
"Content Strategy",
"Social Media Management"
],
imageUrl: "/assets/work/guru.png",
externalLink:
"https://drive.google.com/drive/folders/1WnwVt56gsZb-1hQwmXWTcvipPTgWVO5c"
},
           
     {
id: "project-1781805655858",
client: "Multiple Brands",
title: "Multiple Brands",
brief:
"A collection of branding, campaign, and social media projects executed across entrepreneurship, FMCG, healthcare, education, wellness, automotive, and event management sectors. This body of work includes campaigns for E-Cell DCRUST, Patanjali-related concepts, automobile branding explorations, and marketing communication assets.",
imageUrl: "/assets/work/mul.png",
externalLink:
"https://drive.google.com/drive/folders/1qymwI-QfjWaGb3x8l7u_xSo_9AZyCNWt",
tags: [
"Branding",
"Marketing Design",
"Automotive",
"Campaign Design",
"Print Design"
],
deliverables: [
"E-Cell DCRUST Branding",
"Event Creatives",
"Patanjali Campaign Concepts",
"Automobile Brand Designs",
"Campaign Creatives",
"Print Marketing Materials",
"Social Media Assets"
]
},
      {
id: "project-1781805973702",
client: "Spec Work",
title: "Spec Work",
brief:
"A curated collection of creative assessments, speculative projects, and design challenges completed for agencies, startups, and emerging brands. Projects include fitness brands, protein and supplement brands, marketing creatives, and the logo design for Creatiwise, demonstrating versatility across multiple industries.",
imageUrl: "/assets/work/spec.png",
externalLink:
"https://drive.google.com/drive/folders/1q57thnhKB3QI6cjOmWscuoC7XAWaC3Nd",
tags: [
"Graphic Design",
"Logo Design",
"Video Editing",
"Content Strategy",
"Marketing Creatives"
],
deliverables: [
"Creatiwise Logo Design",
"Protein Brand Campaigns",
"Supplement Brand Creatives",
"Social Media Creatives",
"Short-form Video Editing",
"Campaign Mockups",
"Content Strategy Frameworks"
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
        "title": "One cohesive brand system",
        "desc": "Digital, print, motion, and content—all aligned."
      },
      {
        "num": "02",
        "title": "Multidisciplinary expertise",
        "desc": "Strategy, design, and communication working together."
      },
      {
        "num": "03",
        "title": "Direct collaboration",
        "desc": "Fewer handoffs. More clarity."
      },
      {
        "num": "04",
        "title": "Ready for every touchpoint",
        "desc": "From Instagram to packaging to presentations."
      },
      {
        "num": "05",
        "title": "Faster execution",
        "desc": "Less coordination, more momentum."
      },
      {
        "num": "06",
        "title": "Work built to scale",
        "desc": "Systems designed to grow with your business."
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
        "priceINR": "₹6,999",
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
        "priceINR": "₹10,999",
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
        "name": "Enterprise",
        "priceINR": "₹15,999",
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
        "priceINR": "₹22,999",
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
    "note": "Packages are customisable. Advertising budgets, third-party software subscriptions, and media spend are billed separately and are not included in retainers."
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
