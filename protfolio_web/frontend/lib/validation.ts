export const PROJECT_TYPES = [
  { value: "ai_agent", label: "AI agent or multi-agent system" },
  { value: "automation", label: "Business automation workflow" },
  { value: "ai_app", label: "AI-powered application / SaaS MVP" },
  { value: "integration", label: "AI integration with existing tools" },
  { value: "other", label: "Something else" },
] as const;

export const BUDGET_RANGES = [
  { value: "not_sure", label: "Not sure yet" },
  { value: "under_5k", label: "Under $5,000" },
  { value: "5k_15k", label: "$5,000 – $15,000" },
  { value: "over_15k", label: "Over $15,000" },
] as const;

export type ProjectType = (typeof PROJECT_TYPES)[number]["value"];
export type BudgetRange = (typeof BUDGET_RANGES)[number]["value"];

export type InquiryValues = {
  name: string;
  email: string;
  projectType: ProjectType | "";
  budgetRange: BudgetRange | "";
  message: string;
};

export type InquiryErrors = Partial<Record<keyof InquiryValues, string>>;

export const INQUIRY_LIMITS = {
  name: 120,
  email: 254,
  message: { min: 20, max: 4000 },
} as const;

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export function validateInquiry(values: InquiryValues): InquiryErrors {
  const errors: InquiryErrors = {};

  const name = values.name.trim();
  if (!name) {
    errors.name = "Enter your name.";
  } else if (name.length > INQUIRY_LIMITS.name) {
    errors.name = `Keep your name under ${INQUIRY_LIMITS.name} characters.`;
  }

  const email = values.email.trim();
  if (!email) {
    errors.email = "Enter your email address.";
  } else if (!EMAIL_PATTERN.test(email)) {
    errors.email = "Enter a valid email address, for example name@company.com.";
  } else if (email.length > INQUIRY_LIMITS.email) {
    errors.email = "That email address is too long.";
  }

  if (!values.projectType) {
    errors.projectType = "Choose the kind of project you have in mind.";
  }

  const message = values.message.trim();
  if (!message) {
    errors.message = "Describe your project so I can respond usefully.";
  } else if (message.length < INQUIRY_LIMITS.message.min) {
    errors.message = `Add a little more detail (at least ${INQUIRY_LIMITS.message.min} characters).`;
  } else if (message.length > INQUIRY_LIMITS.message.max) {
    errors.message = `Keep the message under ${INQUIRY_LIMITS.message.max} characters.`;
  }

  return errors;
}

export function hasErrors(errors: InquiryErrors): boolean {
  return Object.keys(errors).length > 0;
}
