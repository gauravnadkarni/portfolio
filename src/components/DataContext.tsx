import React from "react";
import { DataContext } from "../hooks/DataContext";
import { AboutBoxProps } from "./about/AboutBox";
import { ResumeBoxProps } from "./Resume/ResumeBox";
import { SkillsBoxProps } from "./skills/SkillsBox";
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
  children: React.ReactNode;
}

const DataProvider: React.FC<DataProviderProps> = ({
  aboutBoxProps,
  resumeBoxProps,
  skillsBoxProps,
  workHistoryBoxProps,
  contactBoxProps,
  projectBoxProps,
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
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataProvider;