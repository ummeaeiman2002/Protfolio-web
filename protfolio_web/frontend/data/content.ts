import { SITE_CORE_MESSAGE, SITE_NAME } from "@/data/site";

export const EXPERTISE_KEYWORDS: string[] = [
  "Python",
  "Python Automation",
  "AI Agents",
  "FastAPI",
  "Multi-Agent Systems",
  "Workflow Automation",
  "LLM Tooling",
  "AI-Powered Web Apps",
  "API Integrations",
  "Data-Driven Workflows",
  "Agent Evaluation",
  "Prompt Orchestration",
];

export type Capability = {
  index: string;
  title: string;
  description: string;
  points: string[];
};

export const CAPABILITIES: Capability[] = [
  {
    index: "01",
    title: "Python Engineering",
    description:
      "Backend services, automation scripts and data workflows written in Python and built to run unattended.",
    points: ["FastAPI services", "API and data integrations", "Validation and error handling"],
  },
  {
    index: "02",
    title: "AI Agents",
    description:
      "Agents that plan, call tools, check their own work and hand back a usable result instead of a suggestion.",
    points: ["Step-by-step planning", "Tool and API selection", "Failure handling and retries"],
  },
  {
    index: "03",
    title: "Multi-Agent Systems",
    description:
      "Several agents with defined roles that pass work between each other, held together by an orchestration layer and shared state.",
    points: ["Role separation and handoffs", "Shared memory and state", "Supervisor and review loops"],
  },
  {
    index: "04",
    title: "AI Applications",
    description:
      "Complete products — interface, Python backend, data layer and AI reasoning — built as one coherent, maintainable system.",
    points: ["Next.js frontends", "FastAPI services", "PostgreSQL persistence"],
  },
];

export type ProblemRow = {
  problem: string;
  system: string;
  outcome: string;
  outcomeIsPlaceholder: boolean;
};

/**
 * PLACEHOLDER ROWS — the outcome column must stay marked until the owner
 * supplies verified results. Never replace it with estimated numbers.
 */
export const PROBLEM_ROWS: ProblemRow[] = [
  {
    problem: "Hours of manual lead research before anyone is contacted.",
    system: "An agent that finds, enriches and qualifies leads, then returns a shortlist with reasoning.",
    outcome: "Verified outcome pending — owner to supply measured results.",
    outcomeIsPlaceholder: true,
  },
  {
    problem: "Answers buried across docs, tickets and internal tools.",
    system: "A research agent that retrieves context, summarises it and cites the source it used.",
    outcome: "Verified outcome pending — owner to supply measured results.",
    outcomeIsPlaceholder: true,
  },
  {
    problem: "The same handoffs repeated by hand between systems every week.",
    system: "An automation layer that moves data between APIs, database and inbox with error handling.",
    outcome: "Verified outcome pending — owner to supply measured results.",
    outcomeIsPlaceholder: true,
  },
];

/**
 * Hero studio panel — the agency-style identity card on the right of the hero.
 * Keep it to studio-level claims: what gets built, not personal biography.
 */
export const STUDIO_PANEL = {
  eyebrow: "Independent Studio",
  title: "The Studio",
  status: "Online",
  name: "AI STUDIO",
  tagline: "Python development and agentic AI engineering by Umm E Aeiman.",
  description:
    "The studio builds Python backends, AI agents, workflow automation and complete AI-powered products for founders, teams and growing businesses.",
  builds: [
    {
      index: "01",
      title: "AI Agents",
      description: "Agents that plan, call tools and check their own work.",
    },
    {
      index: "02",
      title: "Workflow Automation",
      description: "Reliable hand-offs across APIs, data and inbox.",
    },
    {
      index: "03",
      title: "AI Applications",
      description: "Interface, API, data layer and reasoning in one system.",
    },
  ],
  tags: ["Python", "AI Agents", "Multi-Agent Systems", "LLM Tooling", "Full-Stack Delivery"],
} as const;

export type ArchitectureNode = {
  title: string;
  description: string;
};

export const ARCHITECTURE_NODES: ArchitectureNode[] = [
  {
    title: "Interface",
    description: "Where the request enters — form, scheduled job or internal trigger.",
  },
  {
    title: "Orchestration",
    description: "The planner that decides the next step and stops when the goal is met.",
  },
  {
    title: "Tools & APIs",
    description: "Typed functions the agent may call, each validated before execution.",
  },
  {
    title: "Data & memory",
    description: "Structured storage and retrieved context the agent reads between steps.",
  },
  {
    title: "Guardrails",
    description: "Input limits, retries, logging and checks that keep the run safe.",
  },
  {
    title: "Output",
    description: "A verified result delivered back to the user or downstream system.",
  },
];

export type ProcessStep = {
  index: string;
  title: string;
  description: string;
  deliverable: string;
};

export const PROCESS_STEPS: ProcessStep[] = [
  {
    index: "01",
    title: "Discover",
    description: "Map the real problem, the constraints around it and the signal that proves it improved.",
    deliverable: "Problem brief and success criteria",
  },
  {
    index: "02",
    title: "Architect",
    description: "Choose the workflow, tools, data flow and failure handling before writing the system.",
    deliverable: "Architecture and workflow design",
  },
  {
    index: "03",
    title: "Build",
    description: "Implement the agent, the backend around it and the interface people actually use.",
    deliverable: "Working, testable software",
  },
  {
    index: "04",
    title: "Harden",
    description: "Add validation, retries, rate limits and tests so the system behaves under real load.",
    deliverable: "Verified behaviour and error handling",
  },
  {
    index: "05",
    title: "Ship & iterate",
    description: "Deploy, watch it run against real inputs and refine the parts that underperform.",
    deliverable: "Live deployment and next steps",
  },
];

export type StackGroup = {
  label: string;
  items: string[];
};

export const TECH_STACK: StackGroup[] = [
  {
    label: "Frontend",
    items: ["Next.js 16", "React", "TypeScript", "Tailwind CSS"],
  },
  {
    label: "Python & AI",
    items: ["Python", "FastAPI", "Pydantic", "LLM tooling", "Automation"],
  },
  {
    label: "Data",
    items: ["PostgreSQL", "Neon", "Typed static data"],
  },
  {
    label: "Delivery",
    items: ["Vercel", "Render", "Git", "Automated checks"],
  },
];

export type BuildingItem = {
  title: string;
  description: string;
  stack: string[];
  href?: string;
  type?: string;
  period?: string;
};

/**
 * Only entries the owner has verified and is happy to publish belong here.
 * An empty list renders an honest empty state instead of invented projects.
 */
export const CURRENTLY_BUILDING: BuildingItem[] = [];

/**
 * Section headings and copy that used to live inside the components.
 * They are the static fallback: when Sanity has no home page document yet
 * the site still renders this approved copy.
 */
export const SECTION_HEADINGS = {
  expertise: {
    title: "Python, AI agents and automation",
  },
  capabilities: {
    title: "From Python to intelligent systems.",
    description:
      "Each engagement is scoped around a real problem, then engineered as working Python and AI software — not a slide deck about AI.",
  },
  problemSolver: {
    title: "You bring the problem. I engineer the system.",
    description:
      "How a request moves from a business bottleneck to an engineered agent system and a measurable result.",
  },
  architecture: {
    title: "What happens behind the agent.",
    description:
      "Every agent is assembled from the same parts. Naming them clearly is what makes the system explainable, testable and safe to operate.",
    note: "The list above reads top to bottom on small screens and left to right on larger ones. Each node is a place where the system can fail, so each one gets validation, logging and a defined fallback before the agent is considered finished.",
  },
  services: {
    title: "What can I build for you?",
    description:
      "Focused engagements that end with working software and a system you can keep operating.",
  },
  process: {
    title: "From idea to production.",
    description:
      "Five stages, each with a concrete output. You always know what exists and what comes next.",
  },
  technologyStack: {
    title: "Built with Python and modern technology.",
    description:
      "Python services for the backend and a deliberately small frontend stack, chosen so the whole system stays readable and maintainable.",
  },
  about: {
    titleLead: "I'm a",
    titleHighlight: "Python & Agentic AI Engineer",
    titleTail: "who builds systems, not just demos.",
  },
  building: {
    title: "Python & AI in progress.",
    description:
      "Current Python development, agentic AI builds and automation work — only activities that are verified and ready to share are listed here.",
  },
  finalCta: {
    title: "Have a problem worth automating?",
    description:
      "Describe the workflow and I'll tell you honestly what an agent can and cannot do about it.",
    primaryLabel: "Start a project",
    secondaryLabel: "Review previous work",
  },
} as const;

/**
 * About section copy, kept here so it can be replaced from Sanity.
 */
export const ABOUT_CONTENT = {
  paragraphs: [
    `${SITE_NAME} is a Python developer and agentic AI engineer who designs AI agents, Python services, automation workflows and AI-powered applications — and writes the code that makes them run. That includes the agent logic, the Python backend it talks to, the data it reads and the interface people actually use.`,
    "The work starts with the problem, not the model. We define what “better” means in measurable terms, choose an architecture that can be operated safely, then build it until it holds up against real inputs.",
  ],
  callout: SITE_CORE_MESSAGE,
  principles: [
    "Agent design and orchestration before model choice",
    "Full-stack implementation, not prototypes left half-built",
    "Plain-language communication about what the system does",
    "Validation, failure handling and tests treated as part of the feature",
  ],
  caption: `${SITE_NAME} — Founder & Lead Engineer`,
} as const;
