export type ContactIconKey = "email" | "linkedin" | "github";
export type ProjectIconKey = "professional" | "technical";

export interface PortfolioContent {
  identity: {
    name: string;
    shortName: string;
    firstName: string;
    middleName: string;
    lastName: string;
    role: string;
    education: string;
    positioning: string;
    heroKicker: string;
    heroDescription: string;
    description: string;
    keywords: string[];
  };
  navigation: Array<{
    label: string;
    href: string;
    id: string;
    index: string;
  }>;
  principles: Array<{
    index: string;
    title: string;
    description: string;
  }>;
  about: {
    eyebrow: string;
    headingLead: string;
    headingMuted: string;
    paragraphs: string[];
    profileFacts: Array<{ label: string; value: string }>;
    profileStatement: string;
    profileDescription: string;
    capabilityGroups: Array<{
      index: string;
      title: string;
      items: string[];
    }>;
    education: {
      field: string;
      level: string;
      description: string;
      institution: string | null;
      graduationYear: string | null;
    };
  };
  experience: {
    eyebrow: string;
    headingLead: string;
    headingMuted: string;
    introduction: string;
    currentRole: {
      period: string;
      category: string;
      title: string;
      description: string;
      tags: string[];
      employer: string | null;
      location: string | null;
      startDate: string | null;
    };
    responsibilityGroups: Array<{
      index: string;
      title: string;
      description: string;
      items: string[];
    }>;
    workingPrinciples: Array<{
      title: string;
      description: string;
    }>;
    impact: Array<{
      label: string;
      value: string | null;
      placeholder: string;
      note: string;
    }>;
    impactDisclaimer: string;
  };
  projects: {
    eyebrow: string;
    headingLead: string;
    headingMuted: string;
    introduction: string;
    tracks: Array<{
      index: string;
      label: string;
      title: string;
      description: string;
      tags: string[];
      icon: ProjectIconKey;
      status: string;
    }>;
    caseStudyStructure: Array<{
      index: string;
      title: string;
      description: string;
    }>;
    confidentialityNote: string;
    entries: Array<{
      slug: string;
      track: ProjectIconKey;
      title: string;
      subtitle: string;
      status: "draft" | "published";
      context: string;
      role: string;
      approach: string;
      outcome: string;
      tags: string[];
    }>;
  };
  archive: {
    eyebrow: string;
    headingLead: string;
    headingMuted: string;
    introduction: string;
    flower: {
      name: string;
      description: string;
      qualities: string[];
    };
    watching: string[];
    artists: Array<{
      index: string;
      name: string;
      note?: string;
    }>;
    instruments: string[];
    designPrinciple: string;
  };
  contact: {
    eyebrow: string;
    headingLead: string;
    headingMuted: string;
    introduction: string;
    conversationAreas: string[];
    channels: Array<{
      label: string;
      detail: string;
      status: string;
      icon: ContactIconKey;
      href: string | null;
    }>;
    publicationNote: string;
  };
}

export const portfolioContent = {
  identity: {
    name: "Ruth Berlie Perez",
    shortName: "RBP",
    firstName: "Ruth",
    middleName: "Berlie",
    lastName: "Perez",
    role: "Procurement Manager",
    education: "Computer Science Graduate",
    positioning: "Procurement × Technology × Systems",
    heroKicker: "Procurement / Technology / Systems",
    heroDescription:
      "Working across procurement, technology, systems, and problem-solving with a balance of commercial discipline and technical curiosity.",
    description:
      "Portfolio of Ruth Berlie Perez — Procurement Manager and Computer Science graduate working across procurement, technology, systems, and problem-solving.",
    keywords: [
      "Ruth Berlie Perez",
      "Procurement Manager",
      "Procurement",
      "Commercial Operations",
      "Computer Science",
      "Technology",
      "Systems",
      "Portfolio",
    ],
  },
  navigation: [
    { label: "About", href: "#about", id: "about", index: "01" },
    { label: "Experience", href: "#experience", id: "experience", index: "02" },
    { label: "Projects", href: "#projects", id: "projects", index: "03" },
    { label: "Archive", href: "#archive", id: "archive", index: "04" },
    { label: "Contact", href: "#contact", id: "contact", index: "05" },
  ],
  principles: [
    {
      index: "01",
      title: "Procurement",
      description: "Commercial judgment, sourcing, negotiation, and structured decision-making.",
    },
    {
      index: "02",
      title: "Technology",
      description: "A Computer Science foundation with a practical interest in systems and software.",
    },
    {
      index: "03",
      title: "Creative",
      description: "Music, film, anime, and design as a quieter layer behind the professional work.",
    },
  ],
  about: {
    eyebrow: "01 / About",
    headingLead: "Commercial thinking,",
    headingMuted: "technical foundation, creative perspective.",
    paragraphs: [
      "Ruth works at the intersection of procurement and technology. Her current professional focus is procurement management, supported by a Computer Science background that shapes how she approaches systems, information, process, and problem-solving.",
      "The result is a profile that is commercially grounded but comfortable with technical conversations—useful when requirements, suppliers, systems, and business decisions need to meet in the same room.",
    ],
    profileFacts: [
      { label: "Current role", value: "Procurement Manager" },
      { label: "Discipline", value: "Procurement & Commercial" },
      { label: "Academic foundation", value: "Computer Science" },
      { label: "Working approach", value: "Structured / analytical / practical" },
    ],
    profileStatement:
      "A procurement professional who brings a technical way of thinking to commercial work.",
    profileDescription:
      "The focus is not technology for its own sake. It is using structure, logic, and systems thinking to understand requirements, compare options, manage commercial decisions, and coordinate work clearly across people and suppliers.",
    capabilityGroups: [
      {
        index: "A",
        title: "Commercial",
        items: [
          "Strategic sourcing",
          "Supplier management",
          "Commercial negotiation",
          "Tendering & evaluation",
          "Contract coordination",
        ],
      },
      {
        index: "B",
        title: "Systems",
        items: [
          "Structured problem-solving",
          "Process thinking",
          "Requirements awareness",
          "Technology fluency",
          "Cross-functional coordination",
        ],
      },
    ],
    education: {
      field: "Computer Science",
      level: "Graduate",
      description:
        "A technical foundation in computing, software, logic, and systems that continues to influence how Ruth approaches operational and commercial problems.",
      institution: null,
      graduationYear: null,
    },
  },
  experience: {
    eyebrow: "02 / Experience",
    headingLead: "Procurement with",
    headingMuted: "structure, judgment, and follow-through.",
    introduction:
      "Ruth's current role is centered on procurement management: connecting business requirements with suppliers, commercial decisions, contracts, and operational follow-up.",
    currentRole: {
      period: "Present",
      category: "Professional role",
      title: "Procurement Manager",
      description:
        "Responsible for coordinating procurement activities across sourcing, supplier engagement, commercial evaluation, negotiation, contracts, and purchasing follow-through while working with internal stakeholders to keep decisions aligned with actual requirements.",
      tags: [
        "Sourcing",
        "Negotiation",
        "Supplier Management",
        "Commercial Evaluation",
        "Contracts",
        "Stakeholder Coordination",
      ],
      employer: null,
      location: null,
      startDate: null,
    },
    responsibilityGroups: [
      {
        index: "01",
        title: "Sourcing & Evaluation",
        description:
          "Translating requirements into a clear sourcing process, comparing commercial options, and supporting disciplined supplier selection.",
        items: ["RFQ / RFP coordination", "Commercial evaluation", "Supplier comparison"],
      },
      {
        index: "02",
        title: "Negotiation & Commercial",
        description:
          "Balancing price, scope, risk, delivery, and commercial terms to reach practical and defensible procurement decisions.",
        items: ["Price negotiation", "Commercial terms", "Value and risk review"],
      },
      {
        index: "03",
        title: "Supplier Management",
        description:
          "Maintaining clear supplier communication, following delivery and commitments, and coordinating issues through to resolution.",
        items: ["Vendor coordination", "Performance follow-up", "Issue escalation"],
      },
      {
        index: "04",
        title: "Contracts & Governance",
        description:
          "Supporting contract review, documentation discipline, approvals, and procurement controls across the purchasing lifecycle.",
        items: ["Contract coordination", "Approval workflow", "Documentation control"],
      },
    ],
    workingPrinciples: [
      {
        title: "Clarity",
        description: "Make requirements, comparisons, responsibilities, and decisions easy to understand.",
      },
      {
        title: "Commercial judgment",
        description: "Look beyond unit price to scope, risk, terms, timing, and overall value.",
      },
      {
        title: "Follow-through",
        description: "Track commitments and close the loop across suppliers and internal stakeholders.",
      },
      {
        title: "Systems thinking",
        description: "Use structure and process to reduce ambiguity and improve repeatability.",
      },
    ],
    impact: [
      { label: "Savings", value: null, placeholder: "To be added", note: "Verified cost impact" },
      {
        label: "Supplier performance",
        value: null,
        placeholder: "To be added",
        note: "Measured improvement",
      },
      {
        label: "Process improvement",
        value: null,
        placeholder: "To be added",
        note: "Documented operational gain",
      },
    ],
    impactDisclaimer:
      "Quantified achievements are intentionally left unclaimed until verified figures and examples are available.",
  },
  projects: {
    eyebrow: "03 / Projects",
    headingLead: "Professional work and",
    headingMuted: "technical work stay distinct.",
    introduction:
      "The portfolio separates procurement case studies from software and systems projects. That keeps Ruth's current role clear while still giving her technical background meaningful space.",
    tracks: [
      {
        index: "A",
        label: "Professional",
        title: "Procurement case studies",
        description:
          "Selected professional work will focus on the decision, Ruth's responsibility, the commercial approach, and the measurable result—without exposing confidential client or supplier information.",
        tags: ["Sourcing", "Evaluation", "Negotiation", "Supplier management", "Contracts"],
        icon: "professional",
        status: "Being curated",
      },
      {
        index: "B",
        label: "Technical",
        title: "Software & systems work",
        description:
          "Technical projects will be presented separately from Ruth's procurement career so the portfolio can show her Computer Science background without implying that software engineering is her current professional role.",
        tags: ["Software", "Systems", "Problem-solving", "Computer Science"],
        icon: "technical",
        status: "Being curated",
      },
    ],
    caseStudyStructure: [
      { index: "01", title: "Context", description: "What needed to be solved and why it mattered." },
      { index: "02", title: "Role", description: "What Ruth was responsible for in the work." },
      { index: "03", title: "Approach", description: "How the decision, process, or solution was structured." },
      { index: "04", title: "Outcome", description: "The verified result, metric, or lesson that followed." },
    ],
    confidentialityNote:
      "Procurement examples can be anonymized where necessary. Client names, supplier names, pricing, contract terms, and internal data should only appear when they are appropriate to publish. The value of a case study is the reasoning and verified outcome—not sensitive data.",
    entries: [],
  },
  archive: {
    eyebrow: "04 / Archive",
    headingLead: "The things that shape the",
    headingMuted: "quieter side of the profile.",
    introduction:
      "Music, stories, and instruments sit behind the professional work as a more personal layer. They are presented here as references and influences—not as the main identity of the site.",
    flower: {
      name: "Lily",
      description:
        "Ruth's favorite flower and the visual motif behind the Midnight Lily identity used throughout the portfolio.",
      qualities: ["calm", "precise", "personal"],
    },
    watching: ["Marvel movies", "Demon Slayer", "Attack on Titan", "Tokyo Ghoul", "Frieren"],
    artists: [
      { index: "01", name: "Avril Lavigne" },
      { index: "02", name: "Coldplay" },
      { index: "03", name: "Linkin Park", note: "Emily Armstrong era" },
      { index: "04", name: "Paramore" },
    ],
    instruments: ["Guitar", "Drums", "Keyboard"],
    designPrinciple:
      "These references influence atmosphere, pacing, and visual taste. The site deliberately avoids character art, movie posters, album covers, or imitation interfaces so Ruth's own identity stays stronger than the media she enjoys.",
  },
  contact: {
    eyebrow: "05 / Contact",
    headingLead: "Good work usually starts with",
    headingMuted: "a clear conversation.",
    introduction:
      "For professional conversations around procurement, commercial operations, technology, or systems, Ruth's contact channels can be connected here when the portfolio is ready for publication.",
    conversationAreas: ["Procurement", "Commercial operations", "Technology", "Systems & process"],
    channels: [
      {
        label: "Email",
        detail: "Professional correspondence",
        status: "To be linked",
        icon: "email",
        href: null,
      },
      {
        label: "LinkedIn",
        detail: "Career & professional network",
        status: "To be linked",
        icon: "linkedin",
        href: null,
      },
      {
        label: "GitHub",
        detail: "Technical work & repositories",
        status: "To be linked",
        icon: "github",
        href: null,
      },
    ],
    publicationNote:
      "Contact information is intentionally not fabricated. Real email and profile URLs should be added before public launch.",
  },
} satisfies PortfolioContent;
