import React from 'react';
import { ScrollContext } from '../hooks/ScrollContext';

interface ScrollProviderProps {
  homeRef: React.RefObject<HTMLDivElement>;
  aboutRef: React.RefObject<HTMLDivElement>;
  skillsRef: React.RefObject<HTMLDivElement>;
  projectsRef: React.RefObject<HTMLDivElement>;
  workHistoryRef: React.RefObject<HTMLDivElement>;
  blogRef: React.RefObject<HTMLDivElement>;
  resumeRef: React.RefObject<HTMLDivElement>;
  contactRef: React.RefObject<HTMLDivElement>;
  children: React.ReactNode;
}

const ScrollProvider: React.FC<ScrollProviderProps> = ({ homeRef, aboutRef, skillsRef, projectsRef, workHistoryRef, blogRef, resumeRef, contactRef, children }) => {

  const scrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
    if(ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <ScrollContext.Provider value={{ homeRef,aboutRef,skillsRef,projectsRef,workHistoryRef,blogRef,resumeRef,contactRef, scrollToSection }}>
      {children}
    </ScrollContext.Provider>
  );
};

export default ScrollProvider;