// Site settings. Every value marked PLACEHOLDER needs replacing before launch.
// Search the project for "PLACEHOLDER" to find them all.

export const site = {
  name: "Tieout",

  // PLACEHOLDER: your live domain, with https:// and no trailing slash.
  // Used for SEO tags and social previews.
  url: "https://your-domain.com",

  // PLACEHOLDER: the inbox that should receive enquiries.
  contactEmail: "hello@your-domain.com",

  // PLACEHOLDER: the company LinkedIn page.
  linkedinUrl: "https://www.linkedin.com/company/your-company",

  title: "Tieout | Recurring financial workflows, automated",
  description:
    "Tieout learns a financial firm's business rules from its historical reports, validates them against past results, and automates recurring workflows on analyst-approved rules.",

  founders: [
    { name: "Sarah Fernando", role: "Co-founder and CEO" },
    { name: "Kareena Dutta", role: "Co-founder and CTO" },
  ],
} as const;
