export type Service = {
  slug: string;
  title: string;
  summary: string;
  includes: string[];
  bestFor: string;
};

export const SERVICES: Service[] = [
  {
    slug: "python-development",
    title: "Python development & automation",
    summary:
      "Python services, internal tools and automation scripts that replace manual work and are ready to run unattended.",
    includes: [
      "Python services and internal tools",
      "API and database integrations",
      "Scheduled jobs and automation workflows",
      "Testing, logging and error handling",
    ],
    bestFor: "Teams that need reliable Python tooling or backend work.",
  },
  {
    slug: "ai-agent-development",
    title: "AI agent development",
    summary:
      "A purpose-built agent that handles one high-value workflow end to end — reasoning, tool calls, checks and a usable result.",
    includes: [
      "Problem and workflow design",
      "Agent, tools and prompt orchestration",
      "Validation, retries and failure handling",
      "Evaluation against real inputs",
    ],
    bestFor: "Teams with a repetitive knowledge or research workflow.",
  },
  {
    slug: "business-automation",
    title: "Business automation systems",
    summary:
      "Workflows that connect the tools you already use so data moves without manual copy-paste or follow-up chasing.",
    includes: [
      "Trigger and routing design",
      "API, database and inbox integration",
      "Logging and audit visibility",
      "Safe handling of partial failures",
    ],
    bestFor: "Businesses losing time to manual process handoffs.",
  },
  {
    slug: "ai-powered-applications",
    title: "AI-powered applications",
    summary:
      "A complete application — interface, backend, data layer and AI reasoning — built as one coherent, maintainable system.",
    includes: [
      "Next.js interface and design system",
      "Python / FastAPI service and typed contracts",
      "Database persistence",
      "Deployment and environment setup",
    ],
    bestFor: "Founders validating an AI-powered product or MVP.",
  },
  {
    slug: "ai-integration",
    title: "AI integration",
    summary:
      "Model and agent capability added into software you already run, without exposing secrets or breaking existing behaviour.",
    includes: [
      "Integration with current APIs and data",
      "Server-side secret handling",
      "Rate limits and input validation",
      "Incremental, measurable rollout",
    ],
    bestFor: "Products that need AI inside an existing codebase.",
  },
];
