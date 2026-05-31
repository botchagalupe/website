export type NewslettersStatus = "active" | "paused" | "archived";

export type NewslettersItem = {
  title: string;
  description: string;
  url: string;
  status?: NewslettersStatus;
};

export const newsletters: NewslettersItem[] = [
  {
    title: "Business Value in the Age of AI",
    description: "AI CIO newsletters and updates.",
    url: "https://aicio.ai/",
    status: "active"
  },
  {
    title: "Profound",
    description: "Profound is a newsletter applying W. Edwards Deming’s ideas in the digital transformation era.",
    url: "https://www.linkedin.com/build-relation/newsletter-follow?entityUrn=7161118352210288640",
    status: "active"
  }
];
