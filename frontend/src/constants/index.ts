import { PortfolioInfo } from "@/data/info";
import { SocialMediaItem } from "@/types";
import { BsFillEnvelopeOpenFill, BsGithub, BsLinkedin } from "react-icons/bs";

export const SITE_STRINGS = {
  textLogo: PortfolioInfo.textLogo,
  backToMainPageTitle: "Back to main page",
  goToMainPageTitle: "Go to main page",
  backToMainText: "Back to main",
};

export const SITE_ROUTES = {
  home: "/",
  projects: "/projects",
};

export const MENU_OPTIONS = [
  { id: "0", name: "Introduction", url: "#intro" },
  { id: "1", name: "About", url: "#about" },
  { id: "2", name: "Projects", url: "#projects" },
  { id: "3", name: "Tech", url: "#tech" },
  { id: "4", name: "Contact", url: "#contact" },
];

export const SOCIAL_MEDIA: SocialMediaItem[] = [
  {
    id: "linkedin",
    icon: BsLinkedin,
    title: "Visit LinkedIn profile",
    url: PortfolioInfo.socialMedia.linkedIn,
  },
  {
    id: "github",
    icon: BsGithub,
    title: "Visit Github profile",
    url: PortfolioInfo.socialMedia.gitHub,
  },
  {
    id: "mail",
    icon: BsFillEnvelopeOpenFill,
    title: "Send me an email",
    url: PortfolioInfo.socialMedia.mailTo,
  },
];

export const TECH_CATEGORIES = [
  {
    name: "All",
    value: undefined,
  },
  {
    name: "Web App's",
    value: "Web App's",
  },
  {
    name: "Machine Learning",
    value: "Machine Learning",
  },
  {
    name: "Data Visualization",
    value: "Data Visualization",
  },
  {
    name: "Big Data",
    value: "Big Data",
  },
];
