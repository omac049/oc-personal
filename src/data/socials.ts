export interface SocialLink {
  name: string;
  url: string;
  platform: 'github' | 'linkedin' | 'x';
}

export interface SocialsData {
  email: string;
  social: SocialLink[];
}

export const socialsData: SocialsData = {
  email: "omar.seogears@gmail.com",
  social: [
    {
      name: "GitHub",
      url: "https://github.com/omac049",
      platform: "github",
    },
    {
      name: "LinkedIn",
      url: "https://linkedin.com/in/omarrcorral",
      platform: "linkedin",
    },
    {
      name: "X",
      url: "https://twitter.com/omarrcorral",
      platform: "x",
    },
  ],
};
