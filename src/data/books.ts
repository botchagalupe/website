export type Book = {
  title: string;
  description: string;
  year: string;
  tags: string[];
  url: string;
  featured?: boolean;
  notes?: string;
};

export const books: Book[] = [
  {
    title: "The DevOps Handbook",
    description:
      "A practical guide to building reliable, secure, high-performing technology organizations with DevOps principles.",
    year: "2021",
    tags: ["DevOps", "Technology", "Leadership"],
    url: "https://www.amazon.com/DevOps-Handbook-World-Class-Reliability-Organizations-ebook/dp/B09G2GS39R",
    featured: true,
    notes: "Second edition."
  },
  {
    title: "Investments Unlimited",
    description:
      "A business novel about DevOps, security, audit, compliance, and improving the way digital work flows.",
    year: "2022",
    tags: ["DevOps", "Security", "Audit"],
    url: "https://www.amazon.com/Investments-Unlimited-Security-Compliance-Thriving-ebook/dp/B09L329V7C",
    featured: true
  },
  {
    title: "Rebels of Reason",
    description:
      "A history-minded look at reason, artificial intelligence, and the people whose ideas shaped modern AI.",
    year: "2025",
    tags: ["AI", "History", "Reason"],
    url: "https://www.amazon.com/Rebels-Reason-Aristotle-ChatGPT-Heroes-ebook/dp/B0FCD8TW8R",
    featured: true
  },
  {
    title: "Deming's Journey to Profound Knowledge",
    description:
      "A book about W. Edwards Deming, systems thinking, quality, industry, and the ideas behind profound knowledge.",
    year: "2023",
    tags: ["Deming", "Systems Thinking", "Management"],
    url: "https://www.amazon.com/Demings-Journey-Profound-Knowledge-Industry-ebook/dp/B0BW4TXYSB",
    featured: false
  },
  {
    title: "Profound Stories",
    description:
      "A companion volume that expands on themes from Deming's Journey to Profound Knowledge through additional stories.",
    year: "2024",
    tags: ["Deming", "Companion", "Systems Thinking"],
    url: "https://www.amazon.com/Profound-Stories-Companion-Demings-Knowledge-ebook/dp/B0D93DW116",
    featured: false
  },
  {
    title: "Beyond The Phoenix Project",
    description:
      "A transcript companion to the audio series about the origins and evolution of DevOps.",
    year: "2018",
    tags: ["DevOps", "History", "Transcript"],
    url: "https://www.amazon.com/Beyond-Phoenix-Project-Evolution-Transcript-ebook/dp/B07B4M1VYS",
    featured: false
  }
];
