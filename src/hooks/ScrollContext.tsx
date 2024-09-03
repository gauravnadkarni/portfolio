import React, { createContext, useContext, useRef } from 'react';

interface ScrollContextType {
  homeRef: React.RefObject<HTMLDivElement>;
  aboutRef: React.RefObject<HTMLDivElement>;
  skillsRef: React.RefObject<HTMLDivElement>;
  projectsRef: React.RefObject<HTMLDivElement>;
  workHistoryRef: React.RefObject<HTMLDivElement>;
  blogRef: React.RefObject<HTMLDivElement>;
  resumeRef: React.RefObject<HTMLDivElement>;
  contactRef: React.RefObject<HTMLDivElement>;
  scrollToSection: (ref: React.RefObject<HTMLDivElement>)=>void;
}

export const ScrollContext = createContext<ScrollContextType | undefined>(undefined);

export default () => {
  const context = useContext(ScrollContext);
  if (!context) {
    throw new Error("useScroll must be used within a ScrollProvider");
  }
  return context;
};

