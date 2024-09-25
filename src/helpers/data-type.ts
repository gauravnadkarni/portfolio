import { SupportedIconType } from "./icon-map";

type DataShape = {
  home: {
    mainImage: string;
    profileName: string;
    skills: Array<string>;
  };
  about: {
    aboutBox: {
      name: string;
      email: string;
      phone: string;
      profile: string;
      image: {
        src: string;
        altText: string;
      };
      skills: Array<{
        name: string;
        weightText: string;
        weightAmount: number;
      }>;
    };
  };
  skill: {
    skillsBox: {
      skills: Array<{
        caption: string;
        color: string;
      }>;
    };
  };
  projects: {
    projectsBox: {
      projects: Array<{
        image: string;
        shortTitle: string;
        longTitle:string;
        shortDescription: string;
        longDescription: Array<string>;
        type: 'public' | 'private';
        tech: Array<{
          link: string;
          name: string;
        }>;
        links: Array<{
          link?: string;
          iconText: string;
        }>;
      }>;
    };
  };
  workHistory: {
    workItemsBox: {
      workItems: Array<{
        type: string;
        oppText: string;
        mainText: string;
        subText: string;
        smallText: string;
        dotColor: string;
        dotTooltipText: string;
        tooltipPlacement: string;
      }>;
    };
  };
  resume: {
    resumeBox: {
      path: string;
    };
  };
  blogs: Record<string, any>;
  footer: {
    contactBox: {
      physicalAddresses: Array<{
        caption: string;
        value: string;
        icon: SupportedIconType;
      }>;
      socialLinks: Array<{
        link: string;
        icon: SupportedIconType;
      }>;
    };
  };
};

export default DataShape;
