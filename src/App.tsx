import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Landing from "./pages/Landing";
import { useRef } from "react";
import { ScrollProvider } from "./components/ScrollContext";
import { DataProvider } from "./components/DataContext";
import DATA from "./data/data.json";
import { SkillsBoxProps } from "./components/skills/SkillsBox";
import { WorkHistoryBoxesProps } from "./components/work-history/WorkHistoryBoxes";

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
    home: {
      featureEnabled: homeFeatureEnabled,
    },
    about: {
      featureEnabled: aboutFeatureEnabled,
      aboutBox },
    resume: {
      featureEnabled: resumeFeatureEnabled,
      resumeBox
    },
    skill: {
      featureEnabled: skillFeatureEnabled,
      skillsBox 
    },
    workHistory: {
      featureEnabled: workItemFeatureEnabled,
      workItemsBox 
    },
    footer: {
      featureEnabled: footerFeaturEnabled,
      contactBox
    },
    projects: {
      featureEnabled: projectsFeaturEnabled,
      projectsBox
    },
    blogs: {
      featureEnabled: blogsFeaturEnabled,
    },
  } = DATA;

  const featureSwitches = {
    home:homeFeatureEnabled,
    about:aboutFeatureEnabled,
    skill:skillFeatureEnabled,
    projects:projectsFeaturEnabled,
    workHistory:workItemFeatureEnabled,
    resume:resumeFeatureEnabled,
    blogs:blogsFeaturEnabled,
    footer:footerFeaturEnabled,
  }

  return (
    <DataProvider
      aboutBoxProps={aboutBox}
      resumeBoxProps={resumeBox}
      skillsBoxProps={skillsBox as SkillsBoxProps}
      workHistoryBoxProps={workItemsBox as WorkHistoryBoxesProps}
      contactBoxProps={contactBox}
      projectBoxProps={projectsBox.projects}
      featureSwitches={featureSwitches}
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
