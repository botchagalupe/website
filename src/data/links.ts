export type LinkItem = {
  label: string;
  url: string;
  description?: string;
  group?: string;
};

export const links: LinkItem[] = [
  {
    label: "Newsletters",
    url: "/newsletters",
    description: "Newsletters archive and updates",
    group: "Profiles"
  },
  {
    label: "LinkedIn",
    url: "https://www.linkedin.com/in/johnwillisatlanta/",
    description: "Professional profile",
    group: "Profiles"
  },
  {
    label: "Email",
    url: "mailto:botchagalupe@gmail.com",
    description: "Direct email",
    group: "Contact"
  }
];
