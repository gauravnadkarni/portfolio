import { useEffect, useRef } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import DataProvider from "./components/DataContext";
import ScrollProvider from "./components/ScrollContext";
import { SkillsBoxProps } from "./components/skills/SkillsBox";
import { WorkHistoryBoxesProps } from "./components/work-history/WorkHistoryBoxes";
import DATA from "./data/data.json";
import Landing from "./pages/Landing";
import DataType from "./helpers/data-type";

const App: React.FC = () => {
  const homeRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const workHistoryRef = useRef<HTMLDivElement>(null);
  const blogRef = useRef<HTMLDivElement>(null);
  const resumeRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  const {
    home: homeBox,
    about: {
      aboutBox },
    resume: {
      resumeBox
    },
    skill: {
      skillsBox 
    },
    workHistory: {
      workItemsBox 
    },
    footer: {
      contactBox
    },
    projects: {
      projectsBox
    },
  } =  DATA as DataType;

  useEffect(()=>{
    document.title = "Gaurav's Portfolio";
  },[])

  return (
    <DataProvider
      homeBoxProps={homeBox}
      aboutBoxProps={aboutBox}
      resumeBoxProps={resumeBox}
      skillsBoxProps={skillsBox as SkillsBoxProps}
      workHistoryBoxProps={workItemsBox as WorkHistoryBoxesProps}
      contactBoxProps={contactBox}
      projectBoxProps={projectsBox.projects}
    >
      <ScrollProvider
        aboutRef={aboutRef}
        blogRef={blogRef}
        contactRef={contactRef}
        homeRef={homeRef}
        projectsRef={projectsRef}
        resumeRef={resumeRef}
        skillsRef={skillsRef}
        workHistoryRef={workHistoryRef}
      >
        <Router>
          <Routes>
            <Route path="/" Component={() => <Landing />} />
          </Routes>
        </Router>
      </ScrollProvider>
    </DataProvider>
  );
};

export default App;
