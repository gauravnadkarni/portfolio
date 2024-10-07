import React from "react";
import { DataContext } from "../hooks/DataContext";
import { AboutBoxProps } from "../components/about/AboutBox";
import { ResumeBoxProps } from "../components/Resume/ResumeBox";
import { SkillsBoxProps } from "../components/skills/SkillsBox";
import { WorkHistoryBoxesProps } from "../components/work-history/WorkHistoryBoxes";
import { ContactBoxProps } from "../components/Contact/ContactBox";
import { ProjectCardProps } from "../components/projects/ProjectCard";
import { HomeBoxProps } from "../components/home/HomeBox";

interface DataProviderProps {
  homeBoxProps: HomeBoxProps;
  aboutBoxProps: AboutBoxProps;
  resumeBoxProps: ResumeBoxProps;
  skillsBoxProps: SkillsBoxProps;
  workHistoryBoxProps: WorkHistoryBoxesProps;
  contactBoxProps: ContactBoxProps;
  projectBoxProps:Array<ProjectCardProps>;
  children: React.ReactNode;
}

const DataProvider: React.FC<DataProviderProps> = ({
  homeBoxProps,
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
        homeBoxProps,
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