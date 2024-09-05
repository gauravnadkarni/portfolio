import { createContext, useContext } from 'react';
import { AboutBoxProps } from '../components/about/AboutBox';
import { ContactBoxProps } from '../components/Contact/ContactBox';
import { ProjectCardProps } from '../components/projects/ProjectCard';
import { ResumeBoxProps } from '../components/Resume/ResumeBox';
import { SkillsBoxProps } from '../components/skills/SkillsBox';
import { WorkHistoryBoxesProps } from '../components/work-history/WorkHistoryBoxes';

interface DataContextType {
  aboutBoxProps:AboutBoxProps;
  resumeBoxProps:ResumeBoxProps;
  skillsBoxProps:SkillsBoxProps;
  workHistoryBoxProps:WorkHistoryBoxesProps;
  contactBoxProps:ContactBoxProps;
  projectBoxProps:Array<ProjectCardProps>;
}

export const DataContext = createContext<DataContextType | undefined>(undefined);

const useHook = () => {
  const context = useContext(DataContext);
  if (!context) {
    throw new Error("dataContext must be used within a DataProvider");
  }
  return context;
}

export default useHook;