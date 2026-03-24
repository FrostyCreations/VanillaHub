// Generalized data architecture 
// Easily swap out the whole 'sections' array for any new client layout

import brandLaunchImg from '../assets/pexels-photo-1450360.jpeg';
import logoImg from '../assets/PG Tour.png';

export const proposalData = {
  client: {
    "name": "VanillaHub",
    "logoText": "VH",
    "logoUrl": "vanilla-hub-logo.png"
  },
  agency: {
    "name": "Big On Digital",
    "contactEmail": "hello@bigondigital.com"
  },
  hero: {
    "badge": "VanillaHub AI",
    "title": "Helping you get the boring stuff right.",
    "subtitle": "Revolutionising South African payroll with automated intelligence and cloud-based compliance.",
    "heroImageUrl": "/vanilla-robot.png"
  },
  sections: [
    {
      type: 'ExecutiveSummary',
      id: 'intro',
      data: {
        title: "Introduction",
        content: "VanillaHub is a next-generation cloud payroll and HR solution designed to simplify complex South African tax and labour laws. \n\nBy automating the 'boring stuff'—from SARS compliance (BCEA, COIDA, UIF) to smart HR tracking—we empower businesses to focus on what truly matters: growth and people.\n\nThe objective of this proposal is to scale the VanillaHub brand, optimize the marketing infrastructure for the Free Pay Wizard and Salary Planner, and build a robust community of 'Vanilla Ambassadors'.",
        image1: "/tech-nodes.png",
        image2: "/vanilla-robot.png"
      }
    },
    {
      type: 'PerformanceOverview',
      id: 'strategy',
      data: {
        title: "Strategy Approach",
        metrics: [
          {
            "label": "Establish the brand identity, website audit, and foundational tracking.",
            "value": "Phase 1",
            "trend": "Foundations"
          },
          {
            "label": "Expand reach via SEO, social profiles, and targeted advertising.",
            "value": "Phase 2 & 3",
            "trend": "Growth"
          }
        ],
        imageUrl: "/tech-nodes.png"
      }
    },
    {
      type: 'FeatureSection',
      id: 'phase1-header',
      data: {
        eyebrow: "Phase 1",
        title: "Foundations",
        description: "This phase focuses on establishing the brand and optimizing the digital infrastructure required to drive robust enquiries and ensure a consistent professional image.",
        imagePosition: "left",
        imageUrl: "/vanilla-robot.png"
      }
    },
    {
      type: 'FeatureSection',
      id: 'brand-visual',
      data: {
        eyebrow: "1. Brand Visual Guide",
        title: "Creator Archetype",
        description: "We define Vanilla Hub’s brand through the lens of the Creator archetype, positioning the business as an innovator that builds intelligent, practical solutions for modern businesses. This establishes a clear visual identity, tone, and messaging framework that reflects your tech-driven approach. The outcome is a brand that feels purposeful, distinctive, and aligned to your vision of creating smarter systems for SMEs across Southern Africa.",
        imagePosition: "right",
        imageUrl: "/tech-nodes.png"
      }
    },
    {
      type: 'FeatureSection',
      id: 'competitor-analysis',
      data: {
        eyebrow: "2. Competitor Analysis",
        title: "Uncovering Opportunities",
        description: "We analyse the competitive landscape to uncover positioning opportunities within the SaaS, ERP, and payroll space. By identifying where competitors fall short, we shape a clearer narrative around Vanilla Hub’s strengths, particularly its custom solutions, affordability, and hands-on expertise. This ensures your brand communicates a compelling reason for clients to choose you over more generic platforms.",
        imagePosition: "left",
        imageUrl: "/vanilla-robot.png"
      }
    },
    {
      type: 'FeatureSection',
      id: 'website-audit',
      data: {
        eyebrow: "3. Website Design Enhancement",
        title: "Audit & Recommendations",
        description: "We conduct a comprehensive website audit to identify gaps in structure, messaging, user experience, and conversion pathways. The outcome is a clear set of recommendations to improve performance and lead generation. This audit will be handed over for implementation within the Knack environment, or we can provide a separate quotation to assist with enhancements directly within the platform.",
        imagePosition: "right",
        imageUrl: "/tech-nodes.png"
      }
    },
    {
      type: 'FeatureSection',
      id: 'seo-foundations',
      data: {
        eyebrow: "4. SEO Implementation",
        title: "Search Visibility",
        description: "We establish the foundations for search visibility, ensuring Vanilla Hub can be discovered by businesses actively seeking payroll, HR, and financial solutions. As Knack has limitations from an SEO perspective, this phase includes structuring a WordPress layer or integration to support SEO efforts. This enables scalable content, improved indexing, and long-term organic growth aligned to your business goals.",
        imagePosition: "left",
        imageUrl: "/vanilla-robot.png"
      }
    },
    {
      type: 'FeatureSection',
      id: 'website-tracking-audit',
      data: {
        eyebrow: "5. Website Tracking",
        title: "Data-Driven Insights",
        description: "We implement tracking systems that provide full visibility into website performance, including user behaviour, enquiries, and conversion activity. Due to platform constraints, this will include linking the Knack website with a WordPress environment or compatible tracking framework to ensure accurate data collection. The result is clear, actionable insights that support smarter marketing decisions and measurable growth.",
        imagePosition: "right",
        imageUrl: "/tech-nodes.png"
      }
    },
    {
      type: 'FeatureSection',
      id: 'video-creation',
      data: {
        eyebrow: "6. Video Creation",
        title: "Corporate Introduction & Explainers",
        description: "We develop professional video content that communicates Vanilla Hub’s offering in a clear and engaging way. By simplifying complex solutions into compelling visual narratives, video builds trust, improves understanding, and increases conversion potential. This positions Vanilla Hub as both innovative and approachable, while strengthening credibility with prospective clients.",
        imagePosition: "left",
        imageUrl: "/vanilla-robot.png"
      }
    },
    {
      type: 'FeatureSection',
      id: 'phase2-header',
      data: {
        eyebrow: "Phase 2",
        title: "Expansion",
        description: "Expanding Vanilla Hub's presence and authority through targeted listings, search optimization, and professional social media setup.",
        imagePosition: "right",
        imageUrl: "/tech-nodes.png",
        bgColor: "secondary"
      }
    },
    {
      type: 'FeatureSection',
      id: 'seo-listings',
      data: {
        eyebrow: "7. SEO Listings and Citations",
        title: "Authority Building",
        description: "We expand Vanilla Hub’s presence across relevant directories and platforms, improving search visibility and reinforcing credibility. This creates multiple trusted touchpoints where potential clients can discover your business, strengthening your authority and increasing the likelihood of engagement.",
        imagePosition: "left",
        imageUrl: "/vanilla-robot.png"
      }
    },
    {
      type: 'FeatureSection',
      id: 'google-bing-listing',
      data: {
        eyebrow: "8. Google Business & Bing Listing",
        title: "Local Mastery",
        description: "We establish a verified and optimised business presence on Google and Bing, enabling Vanilla Hub to appear in local and branded searches. This enhances trust, supports credibility through reviews, and ensures your business is easily accessible to potential clients exploring your services.",
        imagePosition: "right",
        imageUrl: "/tech-nodes.png"
      }
    },
    {
      type: 'FeatureSection',
      id: 'social-profiles',
      data: {
        eyebrow: "9. Social Profiles Setup (Meta)",
        title: "Meta Alignment",
        description: "We set up and optimise Meta platforms to ensure Vanilla Hub is presented professionally and consistently. This creates a strong foundation for future campaigns and content, aligning your social presence with your broader brand and business objectives.",
        imagePosition: "left",
        imageUrl: "/vanilla-robot.png"
      }
    },
        thankYou: "Review and approve the proposal phases. We will begin by executing the foundational audit and visual guide to set the stage for VanillaHub's rapid growth.",
        buttonText: "Review and Proceed"
      }
    }
  ]
};
