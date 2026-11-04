// All the words on the site live here, so you can edit copy without touching layout.
// House style: professional and concise, no buzzwords, and no em dashes.
// Position Tieout as automating recurring financial workflows, not as a reconciliation tool.

export const hero = {
  eyebrow: "Early access now open",
  headline: "Recurring financial workflows, automated.",
  subhead:
    "Tieout learns your firm's business rules from its historical reports, validates them against past results, and runs each cycle on rules your analysts have approved.",
  primaryCta: "Request early access",
  secondaryCta: "See how it works",
  note: "No prompts and no chat interface. Only rules your team has approved.",
};

export const problem = {
  kicker: "The problem",
  title: "Recurring work, still done by hand",
  intro:
    "Every cycle, finance teams rebuild the same outputs from raw data in Excel. The logic behind them is undocumented and difficult to audit.",
  points: [
    {
      title: "Manual, row-level work",
      body: "Analysts process thousands of rows each cycle and correct the same issues period after period.",
    },
    {
      title: "Undocumented business logic",
      body: "Exclusions, mappings and thresholds live in spreadsheets and in individual analysts' experience.",
    },
    {
      title: "Limited traceability",
      body: "When a reported figure changes, finding the cause means reviewing formulas, files and email threads.",
    },
  ],
};

export const howItWorks = {
  kicker: "How it works",
  title: "From raw data to an automated workflow",
  steps: [
    {
      title: "Ingest raw data",
      body: "Load the files you already receive, such as servicer reports, bank exports and internal workbooks, in their existing formats.",
    },
    {
      title: "Learn from history",
      body: "Tieout compares raw data with your signed-off reports, identifies the adjustments analysts made, and proposes rules that explain them.",
    },
    {
      title: "Analyst approval",
      body: "Each rule is shown in plain English with its supporting evidence. Analysts approve, edit or reject it. No rule runs without approval.",
    },
    {
      title: "Automated execution",
      body: "Approved rules run every cycle. Items the rules cannot resolve are routed to an analyst for review.",
    },
  ],
};

export const different = {
  kicker: "Why Tieout",
  title: "Proven before it's automated",
  intro: "There is nothing to prompt. Tieout reproduces your trusted historical results before it automates anything.",
  points: [
    {
      title: "Validated against your history",
      body: "Every proposed rule is tested against prior signed-off periods, with results shown period by period.",
    },
    {
      title: "Human approval on every rule",
      body: "AI identifies candidate rules but never produces a figure. Calculations run in deterministic, tested code, using approved rules only.",
    },
    {
      title: "Complete version history",
      body: "Every change creates a new rule version. Each approval is tied to a specific version, and prior versions are retained.",
    },
    {
      title: "Full audit trail",
      body: "Every output links to its source rows, the rules applied and the analyst who approved each rule.",
    },
  ],
};

export const whoFor = {
  kicker: "Who it's for",
  title: "Built for finance and operations teams",
  intro: "Specialty finance companies, lenders and other financial firms that run recurring, Excel-based workflows.",
  examples: [
    "Loan servicing and portfolio reporting",
    "Interest, fee and payment validation",
    "Investor and lender reporting",
    "Month-end close and reporting",
  ],
};

export const earlyAccess = {
  kicker: "Early access",
  title: "Request early access",
  intro: "We are onboarding a limited number of firms ahead of launch. Share a few details and we will be in touch.",
  fields: {
    name: "Name",
    email: "Work email",
    company: "Company",
    role: "Role",
    reconcile: "Which workflow would you like to automate?",
    reconcilePlaceholder: "For example: monthly interest accrual reporting from servicer files",
  },
  submit: "Request early access",
  submitting: "Submitting...",
  success: "Thank you. We will be in touch shortly.",
  error: "Your request could not be submitted. Please try again or email us at",
};

export const about = {
  title: "About Tieout",
  story: [
    "Tieout was founded by Sarah Fernando and Kareena Dutta, who met at Purdue.",
    "Financial firms run critical recurring workflows on rules that are rarely written down. Those rules live in spreadsheets and in the experience of individual analysts, which makes them difficult to scale, audit or hand over.",
    "We believe software can learn those rules from a firm's own history, provided it shows its work and people remain in control. Tieout validates each rule against past results and presents it in plain English for analyst approval before it runs.",
    "Our first pilot, with a specialty finance firm, begins in December 2026.",
  ],
  contactTitle: "Contact",
  contactBody: "For early access, investor inquiries or general questions, email us.",
};
