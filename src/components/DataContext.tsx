import React, { createContext, useContext, useRef } from "react";
import { ScrollContext } from "../hooks/ScrollContext";
import { DataContext } from "../hooks/DataContext";
import { AboutBoxProps } from "./about/AboutBox";
import { ResumeBoxProps } from "./Resume/ResumeBox";
import { SkillsBoxProps } from "./skills/SkillsBox";
import { WorkHistoryBoxProps } from "./work-history/WorkHistoryBox";
import { WorkHistoryBoxesProps } from "./work-history/WorkHistoryBoxes";
import { ContactBoxProps } from "./Contact/ContactBox";
import { ProjectCardProps } from "./projects/ProjectCard";

interface DataProviderProps {
  aboutBoxProps: AboutBoxProps;
  resumeBoxProps: ResumeBoxProps;
  skillsBoxProps: SkillsBoxProps;
  workHistoryBoxProps: WorkHistoryBoxesProps;
  contactBoxProps: ContactBoxProps;
  projectBoxProps:Array<ProjectCardProps>;
  featureSwitches: {
    home:boolean;
    about:boolean;
    skill:boolean;
    projects:boolean;
    workHistory:boolean;
    resume:boolean;
    blogs:boolean;
    footer:boolean;
  }
  children: React.ReactNode;
}

export const DataProvider: React.FC<DataProviderProps> = ({
  aboutBoxProps,
  resumeBoxProps,
  skillsBoxProps,
  workHistoryBoxProps,
  contactBoxProps,
  projectBoxProps,
  featureSwitches,
  children,
}) => {

  return (
    <DataContext.Provider
      value={{
        aboutBoxProps,
        resumeBoxProps,
        skillsBoxProps,
        workHistoryBoxProps,
        contactBoxProps,
        projectBoxProps,
        featureSwitches,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};
