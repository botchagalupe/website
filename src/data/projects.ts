export type ProjectStatus = "active" | "paused" | "archived" | "experimental";

export type Project = {
  title: string;
  description: string;
  status: ProjectStatus;
  year: string;
  tags: string[];
  url?: string;
  repo?: string;
  featured?: boolean;
  notes?: string;
};

export const projects: Project[] = [
  {
    title: "Example Project",
    description: "A short placeholder description for a project.",
    status: "active",
    year: "2026",
    tags: ["Project", "TODO"],
    url: "https://example.com",
    repo: "https://github.com/example/example",
    featured: false,
    notes: "TODO: Replace with a real project or remove this placeholder."
  }
];
