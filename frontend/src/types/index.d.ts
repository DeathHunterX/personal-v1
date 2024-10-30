import { IconType } from "react-icons";
import { ToolsAndTechs } from "@/constants/toolTech";

export interface SocialMediaItem {
  id: string;
  icon: IconType; // Specify the type for the icon
  title: string;
  url: string;
}

// Define the TechnologyName type to correspond to the keys in ToolsAndTechs
export type TechnologyName = keyof typeof ToolsAndTechs;

export interface TechnologyCategory {
  category: string;
  items: (TechnologyName | string)[];
}

export interface Project {
  _id: string;
  title: string;
  description: string;
  repoUrl: string;
  liveUrl: string;
  poster: {
    url: string;
    metadata: Object;
    originalFilename: string;
  };
  images: [
    {
      url: string;
      metadata: Object;
      originalFilename: string;
    },
  ];
  category: string;
  techStack: string[];
  createdAt: string; // Assume this is a date string
  index: number;
}
